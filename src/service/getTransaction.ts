import { Transaction } from "../client";

interface queryParam {
    name: string;
}

class GetTransactionService {
    public readonly postgresDB = new Transaction();

    public async execute (queryParams: Partial<queryParam>) {
        try {
            const result = await this.postgresDB.getTransactions(queryParams.name);

            return result;
        } catch (error: unknown | any) {
            const [
                statusCode,
                message
            ] = error.message.split(":");

            if (Number(statusCode) > 99 && Number(statusCode) < 600) {
                console.log(message);
                throw error;
            } else {
                throw new Error("500: Error in Service!");
            }
        }
    }
}

export { GetTransactionService };
