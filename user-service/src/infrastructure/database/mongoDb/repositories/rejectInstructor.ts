// import { UserEntity } from "../../../../domain/entities/userEntity";
// import { User } from "../models/User"; 
// const { ObjectId } = require('mongodb');


// export const rejectInstructor = async({instructorId ,reason}:{instructorId:string,reason:string}):Promise<UserEntity | null =>{
//     try{
//         const newInstructorId = new ObjectId(instructorId);

//         const rejectInstructor = await User.findByIdAndUpdate({_id:newInstructorId},{
//             $set:{stage:"rejected"}
//         });

//         if(!rejectInstructor){
//             throw new Error("error in user rejected")
//         }

//     }catch(error){

//     }
// }