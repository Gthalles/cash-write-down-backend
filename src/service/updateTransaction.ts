import { ITransaction } from "../interface/transaction";
import { Transaction } from "../client";

class UpdateTransactionService {
    public readonly postgreDB = new Transaction();

    public async execute (id: number, values: Partial<ITransaction>) {
        try {
            const result = await this.postgreDB.updateTransaction(id, values.value, values.subject, values.date);

            return result;
        } catch (error) {
            const [ statusCode ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                throw error;
            }

            throw new Error("500: Unexpected error on update transaction.");
        }
    }
}

export { UpdateTransactionService };
