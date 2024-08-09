

// import { Request, Response } from "express";
// import { chat, User } from "../../infrastructure/database/mongoDb/models";


// const acessChatController = async( req: Request,res: Response ) => {
//     const { userId } = req.body;

//     if( !userId ) {
//         throw new Error("userId is not provided")
//     }

//     let isChat = await chat.find({
//         isGroupChat : false,
//         $and: [
//             { users: {$elemMatch: { $eq: req.user._id }}},
//             { users: {$elemMatch: { $eq: userId }}}
//         ]
//     }).populate("users","-password")
//     .populate("latestMessage")

//     isChat = await User.populate(isChat, {
//         path: 'latestMessage.sender',
//         select: "username avatar email"
//     })

//     if(isChat.length )

// }