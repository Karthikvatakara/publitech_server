import { Payment } from "../models/payment";
import { subscriptionPayment } from "../models/subscriptionPayment";
import { PaymentPopulatedEntity } from "../../../../domain/entities/PaymentPopulatedEntity";

export const getTotalRevenue = async()=> {
    try{
        const paymentsRevenue = await Payment.aggregate([
            {
                $group: {
                    _id: {
                      year: { $year: "$createdAt" },  
                      month: { $month: "$createdAt" }, 
                    },
                    totalAmount: { $sum: "$amount" }, 
                  },
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1 }, 
            }
        ]);

        const subscriptionRevenue = await subscriptionPayment.aggregate([
            {  $group: {
                _id: {
                  year: { $year: "$createdAt" }, 
                  month: { $month: "$createdAt" }, 
                },
                totalAmount: { $sum: "$amount" }, 
              },
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1 }, 
            }
        ]);

        const combinedRevenue: { [key: string]: number } = {};

        paymentsRevenue.forEach((item) => {
            const key = `${item._id.year}-${item._id.month}`;
            combinedRevenue[key] = item.totalAmount
        });

        subscriptionRevenue.forEach((item) => {
            const key = `${item._id.year}-${item._id.month}`; 
            combinedRevenue[key] = (combinedRevenue[key] || 0) + item.totalAmount;
          });

          const formattedData = Object.keys(combinedRevenue).map((key) => {
            const [ year, month ] = key.split("-");
            return {
                year: parseInt(year),
                month: parseInt(month),
                TotalRevenue: combinedRevenue[key]
            }
          })

          return formattedData
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}