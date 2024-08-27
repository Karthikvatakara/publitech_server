import { Enrollment } from "../models";

export const lessonProgress = async( userId: string, courseId: string, lessonId: string, timeWatched: number, totalDuration: number ) => {
    try{
        const enrollment = await Enrollment.findOne({userId, courseId});

        if( !enrollment ) {
            throw new Error("enrollment is not found");
        }

        const lessonProgress = enrollment.progress?.lessonProgress?.find((lp)=>
                                                       lp.lessonId.toString() === lessonId)

        if( lessonProgress ) {
            lessonProgress.totalTimeWatched = timeWatched;
            lessonProgress.lastWatchedPosition = timeWatched;

            if( !lessonProgress.isCompleted) {
                lessonProgress.isCompleted = ( timeWatched/totalDuration ) >= .8
            }
            // lessonProgress.isCompleted = (timeWatched / totalDuration) >= 0.8 ? true: false;
        }else {
            enrollment?.progress?.lessonProgress?.push({
                lessonId,
                totalTimeWatched: timeWatched,
                lastWatchedPosition: timeWatched,
                isCompleted: ( timeWatched/ totalDuration) >= 0.8
            })
        }

        await enrollment.save();
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}