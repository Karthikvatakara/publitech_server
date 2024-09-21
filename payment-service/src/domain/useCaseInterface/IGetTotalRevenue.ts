
export interface IGetTotalRevenue {
    execute:() => Promise<{year: number, month: number, totalRevenue: number}[] | null>
}