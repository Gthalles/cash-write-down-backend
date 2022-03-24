import { Postgres } from "./postgres";

class Lending extends Postgres {
    private result: any;

    public async getLendings (id?: string) {
        console.log("GetLendings() with postgres works!!");

        try {
            await this.connect();
            if (id) {
                this.result = await this.client.query("SELECT * FROM lendings WHERE lender_name LIKE $1;", [ id ]);

            } else {
                this.result = await this.client.query("SELECT * FROM lendings;");
            }
            this.disconnect();

            return this.result.rows;
        } catch (error: unknown) {
            throw new Error("503: Service Unavailable");
        }
    }
}

export { Lending };
