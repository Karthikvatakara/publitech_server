import { CourseEntity } from "../../../../domain/entities";
import { course } from "../models";

export const getCompleteCourses = async(page: number = 1,limit: number = 5,search: string = "",filter: string = "",sort: string = ""):Promise<{courses: CourseEntity[]; total: number}> => {
    try{

        const skip = (page-1) * limit;

        let query: any = { isBlockedInstructor: false };

        if (search) {
            query.$and = [
                { isBlockedInstructor: false },
                {
                    $or: [
                        { title: { $regex: search, $options: 'i' } },
                        { 'instructorRef.username': { $regex: search, $options: 'i' } },
                        { 'categoryRef.title': { $regex: search, $options: 'i' } }
                    ]
                }
            ];
        }

        if(filter) {
            if(filter === 'verified') {
                query.isVerified = true
            } else if( filter === "notVerified") {
                query.isVerified = false;
            } else {
                query.stage = filter;
            }
        }

        let sortOption:any = {};
        if(sort === 'priceLowToHigh') {
            sortOption = { 'pricing.amount':1};
        } else if(sort === 'priceHighToLow') {
            sortOption = { 'pricing.amount': -1 };
        }
        const allCourses = await course.find(query).
        populate("instructorRef","username").
        populate("categoryRef","title")
        .sort(sortOption)
        .skip(skip)
        .limit(limit)
        
        const total = await course.countDocuments(query);
        return { courses: allCourses, total };
    }catch(error){
        throw new Error((error as Error)?.message)
    }
}