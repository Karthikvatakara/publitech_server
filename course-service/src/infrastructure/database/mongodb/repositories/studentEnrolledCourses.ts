import { Enrollment } from "../models";
import { course } from "../models";

export const studentEnrolledCourses = async (userId: string) => {
    try {
        const enrollments = await Enrollment.find({ userId })
            .populate({
                path: 'courseId',
                model: course,
                select: 'title description thumbnail pricing lessons'
            });

        const enrollmentsWithCompletion = enrollments.map((enrollment) => {
            const progress = enrollment?.progress;
            const lessonProgress = progress?.lessonProgress;

            if (!lessonProgress || lessonProgress.length === 0) {
                return {
                    ...enrollment.toObject(),
                    completionPercentage: 0
                };
            }

            const completedLessons = lessonProgress.filter((lesson) => lesson.isCompleted).length;
            const totalLessons = enrollment?.courseId?.lessons?.length;
            console.log("🚀 ~ enrollmentsWithCompletion ~ totalLessons:", totalLessons)

            const completionPercentage = (completedLessons / totalLessons) * 100;

            return {
                ...enrollment.toObject(),
                completionPercentage: completionPercentage.toFixed(2)
            };
        });

        return enrollmentsWithCompletion;
    } catch (error) {
        throw new Error((error as Error)?.message);
    }
};
