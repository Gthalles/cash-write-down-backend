import pg from "pg";

class Postgres {
    public readonly client = new pg.Client({
        user: "postgres",
        password: "postgres",
        host: "localhost",
        database: "cash_write_down",
        port: 5432,
    });

    public async connect () {
        await this.client.connect()
            .then(() => {
                console.log("connected");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    public async disconnect () {
        await this.client.end();
    }
}

export { Postgres };
