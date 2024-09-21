import { course, Enrollment } from "../models"

export const categoryEnrollmentDistribution = async() => {
    try{

        const enrollmentByCourse = await Enrollment.aggregate([
            { $group: { _id: "$courseId", count: { $sum:1}}}
        ]);
        console.log("🚀 ~ categoryEnrollmentDistribution ~ enrollmentByCourse:", enrollmentByCourse)

        const coursesWithCategories = await course.aggregate([
            { $match: { _id: {$in: enrollmentByCourse.map(enrollment => enrollment._id)}}},
            { $lookup: {
                from:"categories",
                localField: 'categoryRef',
                foreignField: '_id',
                as:'category'
            }},
            {$unwind:'$category'}
        ]);
        console.log("🚀 ~ categoryEnrollmentDistribution ~ coursesWithCategories:", coursesWithCategories)

        const enrollmentsByCategory = coursesWithCategories.reduce((acc,course) => {
            const categoryId = course.category._id.toString();

            if(!acc[categoryId]) {
                acc[categoryId] = { category: course.category.title, count: 0}
            }
            
            acc[categoryId].count += enrollmentByCourse.find(e => e._id.equals(course._id))?.count || 0;

            return acc;
        },{} as Record<string, { category: string; count: number }>);
        console.log("🚀 ~ enrollmentsByCategory ~ enrollmentsByCategory:", enrollmentsByCategory)

        const totalEnrollments:any = Object.values(enrollmentsByCategory).reduce((sum, category) => sum + category.count, 0);
        const categoryDistribution = Object.values(enrollmentsByCategory).map(category => ({
            category: category.category,
            percentage: totalEnrollments > 0 ? (category.count / totalEnrollments) * 100 : 0
        }));

        return categoryDistribution;
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}