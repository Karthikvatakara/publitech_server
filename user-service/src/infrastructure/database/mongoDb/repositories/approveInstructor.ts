import { UserEntity } from "../../../../domain/entities/userEntity";
import { User } from "../models/User";
const { ObjectId } = require("mongodb");

interface IUpdateObject {
  stage: string;
  role: string;
  rejectreason?: string;
}

export const approveInstructor = async (
  instructorId?: string,
  reason?: string
): Promise<UserEntity | null> => {
  try {
    
    let status = reason === "null" ? "approved" : "rejected";
    let role = reason !== "null" ? "student" : "instructor";

    let updateObject: IUpdateObject = {
      stage: status,
      role: role,
    };

    if (reason !== "null") updateObject.rejectreason = reason;

    const updatedDoc = await User.findByIdAndUpdate(
      { _id: instructorId },
      {
        $set: updateObject,
      },
      { new: true }
    );

    if (!updatedDoc) {
      throw new Error("error occured in updating instructor");
    }

    console.log("🚀 ~ approveInstructor ~ updatedDoc:", updatedDoc);
    return updatedDoc;
  } catch (error: any) {
    console.error(error, "error in the approveInstructor repoository");
    throw new Error(error?.message);
  }
};
