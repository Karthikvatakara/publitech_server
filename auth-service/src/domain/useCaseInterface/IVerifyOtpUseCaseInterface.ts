
export interface IverifyOtpUseCase {
    execute(email: string,otp: string): Promise<boolean | null>;
}