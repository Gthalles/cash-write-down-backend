import { RedisDB } from "./redis";

class RedisLending extends RedisDB {
    public result: string | null;

    public async getLendings () {
        try {
            this.result = await this.client.get("redis");
        } catch (err) {
            return err;
        }

        console.log(this.result);

        return this.result;
    }
}

export { RedisLending };

