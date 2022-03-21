import { Lending } from "../client";

interface QueryParam {
    id: string;
}
class LendingService {
    public readonly database = new Lending();

    public async execute (queryParams: Partial<QueryParam>) {
        console.log("Lending Service Works!!");

        try {
            return await this.database.getLendings(queryParams.id);
        } catch (error) {
            const [ statusCode ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                throw error;
            } else {
                throw new Error("500: Error in service!");
            }
        }
    }
}

export { LendingService };
