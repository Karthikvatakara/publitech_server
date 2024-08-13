import { IDependencies } from "./IDependency"
import {IAppliedInstructorUseCase,IApproveInstructorUseCase,IGetAllInstructorUseCase,IBlockInstructorUseCase,
    IEditUserProfile,IFindUserByEmail, IGetAllStudentsUseCase, IToggleStudentBlockStatusUseCase } from "../../domain/useCaseInterface"

export interface IUseCases {
    findAppliedInstructrosUseCase:(dependecies:IDependencies) => IAppliedInstructorUseCase,
    approveInstructorUseCase:(dependencies:IDependencies) => IApproveInstructorUseCase
    getallInstructorsUseCase:(dependencies:IDependencies) => IGetAllInstructorUseCase
    blockInstructorUseCase:(dependencies:IDependencies) => IBlockInstructorUseCase
    editUserProfileUseCase:(dependencies:IDependencies) => IEditUserProfile
    findByEmailUseCase:(dependencies:IDependencies) => IFindUserByEmail
    getAllStudentsUseCase:(dependencies: IDependencies) => IGetAllStudentsUseCase
    toggleStudentBlockStatusUseCase:(dependencies: IDependencies) => IToggleStudentBlockStatusUseCase
}