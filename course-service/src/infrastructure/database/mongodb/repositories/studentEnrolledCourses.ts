import { Enrollment } from "../models";
import { course } from "../models";
import { EnrollmentWithCompletionEntity } from "../../../../domain/entities/EnrollmentWithCompletionEntity";

export const studentEnrolledCourses = async (userId: string): Promise<EnrollmentWithCompletionEntity[]> => {
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

            if (!lessonProgress || lessonProgress.length === 0) {
                return {
                    ...enrollment.toObject(),
                    completionPercentage: '0.00'
                };
            }

            const completedLessons = lessonProgress.filter((lesson) => lesson.isCompleted).length;
            const totalLessons = enrollment.courseId.lessons.length;

            const completionPercentage = ((completedLessons / totalLessons) * 100).toFixed(2);

            return {
                ...enrollment.toObject(),
                completionPercentage
            };
        });

        return enrollmentsWithCompletion;
    } catch (error) {
        throw new Error((error as Error).message);
    }
};
