// EnrollmentWithCompletionEntity.ts
export interface EnrollmentWithCompletionEntity {
    _id: string;
    userId: string;
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
            attachments?: {
                title: string;
                url: string;
            };
        }[];
    };
    enrolledAt: Date;
    progress: {
        completedLessons: string[];
        completedAssessments: string[];
        currentLesson: string;
        lessonProgress: {
            lessonId: string;
            totalTimeWatched: number;
            lastWatchedPosition: number;
            isCompleted: boolean;
        }[];
    };
    completionPercentage: string | number; 
}
