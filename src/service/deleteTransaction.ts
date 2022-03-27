import { Transaction } from "../client";

class DeleteTransactionService {
    public readonly postgresDB = new Transaction();

    public async execute (id: number) {
        try {
            const result = await this.postgresDB.deleteTransaction(id);

            return result;

        } catch (error: any) {
            const [ statusCode ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                throw error;
            }

            throw new Error("503: Service Unvailable");
        }
    }
}

export { DeleteTransactionService };
