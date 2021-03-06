import { Lending, RedisLending } from "../client";

interface QueryParam {
    id: string;
}
class GetLendingService {
    public readonly postgresDB = new Lending();

    // Public readonly redisDB = new RedisLending();

    public async execute (queryParams: Partial<QueryParam>) {
        console.log("Lending Service Works!!");

        try {

            // Const redisResult = await this.redisDB.getLendings();
            const result = await this.postgresDB.getLendings(queryParams.id);

            return result;
        } catch (error) {
            const [ statusCode ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                throw error;
            } else {
                throw new Error("500: Unexpected error on list lending");
            }
        }
    }
}

export { GetLendingService };
