import { ICreateChatUseCase,ICreateMessageUseCase,IGetChatByUserIdUseCase,IGetMessagesByChatIdUseCase } from "../../domain/useCaseInterface";
import { IDependency } from "./IDependency";

export interface IUseCases {
    createChatUseCase: ( dependencies: IDependency) => ICreateChatUseCase;
    createMessageUseCase: (dependencies: IDependency) => ICreateMessageUseCase;
    getChatByUserIdUseCase: (dependencies : IDependency) => IGetChatByUserIdUseCase;
    getMessagesByChatIdUseCase: (dependencies: IDependency) => IGetMessagesByChatIdUseCase;
}