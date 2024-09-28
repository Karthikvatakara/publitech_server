import { Enrollment } from "../models";
import { course } from "../models";
import { EnrollmentWithCompletionEntity } from "../../../../domain/entities/EnrollmentWithCompletionEntity";
import { ObjectId } from "mongoose";

export const studentEnrolledCourses = async (userId: string | ObjectId): Promise<EnrollmentWithCompletionEntity[]> => {
    try {
        const enrollments = await Enrollment.find({ userId })
            .populate<{
                courseId: {
                    _id: string;
                    title: string;
                    description: string;
                    thumbnail: string;
                    pricing: {
                        type: string;
                        amount: number;
                    };
                    lessons: {
                        _id: string;
                        title: string;
                        description: string;
                        thumbnail: string;
                        video: string;
                    }[];
                };
            }>({
                path: 'courseId',
                model: course,
                select: 'title description thumbnail pricing lessons'
            });

        const enrollmentsWithCompletion: EnrollmentWithCompletionEntity[] = enrollments.map((enrollment) => {
            const progress = enrollment?.progress;
            const lessonProgress = progress?.lessonProgress;

            const completedLessons = lessonProgress?.filter((lesson) => lesson.isCompleted).length || 0;
            const totalLessons = enrollment.courseId.lessons.length;

            const completionPercentage = ((completedLessons / totalLessons) * 100).toFixed(2);

            return {
                _id: enrollment._id.toString(),
                userId: enrollment.userId.toString(),
                courseId: {
                    _id: enrollment.courseId._id.toString(),
                    title: enrollment.courseId.title,
                    description: enrollment.courseId.description,
                    thumbnail: enrollment.courseId.thumbnail,
                    pricing: enrollment.courseId.pricing,
                    lessons: enrollment.courseId.lessons.map(lesson => ({
                        ...lesson,
                        _id: lesson._id.toString()
                    }))
                },
                enrolledAt: enrollment.enrolledAt,
                progress: enrollment.progress ? {
                    completedLessons: enrollment.progress.completedLessons?.map(id => id.toString()),
                    completedAssessments: enrollment.progress.completedAssessments?.map(id => id.toString()),
                    currentLesson: enrollment.progress.currentLesson?.toString(),
                    lessonProgress: enrollment.progress.lessonProgress?.map(progress => ({
                        ...progress,
                        lessonId: progress.lessonId.toString()
                    }))
                } : undefined,
                completionPercentage
            };
        });

        return enrollmentsWithCompletion;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};