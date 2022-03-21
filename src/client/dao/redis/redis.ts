import Redis from "ioredis";

class RedisDB {
    public readonly client = new Redis({
        host: "127.0.0.1",
        port: 6379,
        password: "",
    });

    public async connect () {
        await this.client.connect().then(() => {
            console.log("Connected at redisDB");
        }).catch((error) => {
            console.log(error);
        });
    }

    public async disconnection () {
        await this.client.disconnect();
    }
}

export { RedisDB };