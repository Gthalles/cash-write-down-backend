import { ITransaction } from "../interface/transaction";
import { Transaction } from "../client";

class AddTransactionService {
    public readonly postgreDB = new Transaction();

    async execute (queryParams: ITransaction) {
        try {
            const result = await this.postgreDB.addTransaction(queryParams);

            return result;
        } catch (error: any) {
            const [ statusCode ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                throw error;
            } else {
                throw new Error("500: Unexpected error adding transaction");
            }
        }
    }
}

export { AddTransactionService };
