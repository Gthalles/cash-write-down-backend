import { ITransaction } from "../interface/transaction";
import { Transaction } from "../client";

class AddTransactionService {
    public readonly postgreDB = new Transaction();

    // eslint-disable-next-line class-methods-use-this
    async execute (queryParams: ITransaction) {
        try {
            const result = await this.postgreDB.addTransaction(queryParams);

            console.log(result);

            return result;
        } catch (error: any) {
            const [
                statusCode,
                message
            ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                throw error;
            } else {
                throw new Error("500: Error in Service!");
            }
        }
    }
}

export { AddTransactionService };
