import { Postgres } from "./postgres";

class Lending extends Postgres {

    public async getLendings () {
        await this.connect();

        this.client.query("SELECT * FROM lendings;")
            .then((data) => console.log(data.rows))
            .catch((error) => console.log(error));

        console.log("GET LENDINGS QUERY WORKS!!");
    }
}

export { Lending };
