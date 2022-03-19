import { RedisDB } from "./redis";

class RedisLending extends RedisDB { 

    public async getLendings () {
        this.client.get("redis", (err, reply) => {
            if (err) throw err;

            console.log(reply);
        });
    }
}

export { RedisLending };

