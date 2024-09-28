export interface CourseWithCategoryEntity {
    _id: string;
    category: {
        _id: string;
        title: string;
    };
}
