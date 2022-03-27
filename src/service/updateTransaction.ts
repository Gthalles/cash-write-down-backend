import { Transaction } from "../client";

interface IParams {
    id: number;
    value: number;
    subject: string;
    date: string;
}

class UpdateTransactionService {
    public readonly postgreDB = new Transaction();

    public async execute (id: number, value?: number, subject?: string, date?: string) {
        try {
            const result = await this.postgreDB.updateTransaction(id, value, subject, date);

            return result;
        } catch (error) {
            const [ statusCode ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                throw error;
            }

            throw new Error("500: Error in service");
        }
    }

}

export { UpdateTransactionService };
