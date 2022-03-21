import { Lending, RedisLending } from "../client";

interface QueryParam {
    id: string;
}
class LendingService {
    public readonly postgresDB = new Lending();

    public readonly redisDB = new RedisLending();

    public async execute (queryParams: Partial<QueryParam>) {
        console.log("Lending Service Works!!");

        try {
            const RedisLending = this.redisDB.getLendings();
            console.log(`Redis Lendings = ${RedisLending}`);

            return await this.postgresDB.getLendings(queryParams.id);
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
