export interface ChatUpdateData {
    userId: string;
    chatId: string;
    subscriptionType: "none" | "basic" | "standard" | "premium";
}