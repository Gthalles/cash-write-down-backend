import { ITransaction } from "../../../interface/transaction";
import { Postgres } from "./postgres";

class Transaction extends Postgres {
    private result: any;

    public async getTransactions (name: string) {
        try {
            await this.connect();
            if (name) {
                this.result = await this.client.query("SELECT * FROM transactions WHERE subject = $1;", [ name ]);
            } else {
                this.result = await this.client.query("SELECT * FROM transactions ORDER BY id");
            }
            this.disconnect();

            return this.result.rows;
        } catch (error) {
            throw new Error("503: Service Unvailable!");
        }
    }

    public async addTransaction (data: ITransaction) {
        try {
            await this.connect();

            const newTransaction = await this.client.query("INSERT INTO transactions VALUES ($1,$2,$3,$4);", [
                data.id,
                data.value,
                data.subject,
                data.date
            ]);

            return newTransaction.rows;
        } catch (error) {
            throw new Error("503: Unvailable Service!");
        }
    }
}

export { Transaction };
