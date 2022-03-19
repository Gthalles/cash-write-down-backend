import { Lending } from "../client";
import { RedisLending } from "../client";

class LendingService {
    public readonly postgresDB = new Lending();
    public readonly redisDB = new RedisLending();

    public constructor () {
        this.execute();
        console.log("Lending SERVICE works!!");
    }

    public async execute () {
        const lendings = await this.postgresDB.getLendings();

        const RedisLending = await this.redisDB.getLendings();
    }
}

export { LendingService };
