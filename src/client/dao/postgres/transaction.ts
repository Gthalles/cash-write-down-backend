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
            throw new Error("503: Service Unvailable");
        }
    }

    public async deleteTransaction (id: number) {
        try {
            await this.connect();

            const transactionToDelete = await this.client.query("SELECT id FROM transactions WHERE id = $1;", [ id ]);

            if ( transactionToDelete.rowCount === 0) {
                throw new Error("404: Transaction not found");
            }

            const deletedTransaction = await this.client.query("DELETE FROM transactions WHERE id = $1;", [ id ]);

            return deletedTransaction.rows;
        } catch (error: any) {
            const [ statusCode ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                throw error;
            }

            throw new Error("503: Service Unvailable");
        }
    }
}

export { Transaction };
