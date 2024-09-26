import { CourseEntity } from "../../../../domain/entities";
import { course } from "../models";

export const getCoursesToUser = async(params:{
    search?: string,
    category?: string,
    sort?: string,
    page: number,
    limit: number
}): Promise<{ courses: CourseEntity[], totalPages: number, currentPage: number} | null> => {
    try{

        const { search,category,sort,page,limit } = params;
        let query:any = { isVerified: true, stage: "accepted", isBlocked: false }

        if(search) {
            query.title = {$regex: search, $options: 'i'}
        }

        if(category){
            query.categoryRef = category;
        }

        let sortOption:any = {};
        if( sort === 'title_asc') {
            sortOption.title = 1;
        } else if(sort === 'title_desc') {
            sortOption.title = -1
        } else if(sort === 'price_asc') {
            sortOption['pricing.amount'] = 1;
        } else if( sort === 'price_desc') {
            sortOption['pricing.amount'] = -1
        }

        const totalCourses = await course.countDocuments(query)
        const totalPages = Math.ceil( totalCourses / limit)
        const courseData = await course.find(query).
                            populate('categoryRef.title')
                            .sort(sortOption)
                            .skip((page-1) * limit)
                            .limit(limit);
        console.log("🚀 ~ courseData:", courseData)

        return { courses: courseData, totalPages, currentPage:page};
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}