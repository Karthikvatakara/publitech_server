import { UserEntity } from "../../../../domain/entities/userEntity";
import { User } from "../models/User";

export const editUserProfile = async (data: UserEntity): Promise<UserEntity | null> => {
    try {
        const { email, ...restValues } = data;

        // Define updateData with an index signature
        const updateData: { [key: string]: any } = {
            username: restValues.username,
            phoneNumber: restValues.phoneNumber,
            "profile.avatar": restValues.profile?.avatar,
            "profile.dateOfBirth": restValues.profile?.dateOfBirth,
            "contact.socialMedia.instagram": restValues.contact?.socialMedia?.instagram,
            "contact.socialMedia.linkedIn": restValues.contact?.socialMedia?.linkedIn,
            "contact.socialMedia.github": restValues.contact?.socialMedia?.github,
        };

        // Remove undefined values from updateData
        Object.keys(updateData).forEach(key => {
            if (updateData[key] === undefined) {
                delete updateData[key];
            }
        });

        // Perform the update operation
        const user = await User.findOneAndUpdate(
            { email: email },
            { $set: updateData },
            { new: true, runValidators: true }
        );

        // const user = await User.findByIdAndUpdate(data._id,data,{new:true});
        console.log("🚀 ~ editUserProfile ~ user:", user);

        return user;
    } catch (error) {
        console.error("Error in editUserProfile:", error);
        throw new Error((error as Error)?.message);
    }
};
