/* eslint-disable max-len */
import { ITransaction } from "../../../interface/transaction";
import { Postgres } from "./postgres";
import { QueryResult } from "pg";

class Transaction extends Postgres {
    private result: QueryResult<ITransaction>;

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

    public async updateTransaction (id: number, newValue?: number,  newSubject?: string, newDate?: string) {
        try {
            await this.connect();

            const transactionToUpdate = await this.client.query("SELECT id FROM transactions WHERE id = $1;", [ id ]);

            if (transactionToUpdate.rowCount === 0) {
                throw new Error("404: Transaction not found");
            }

            if (newValue && newSubject && newDate) {
                console.log("ok");
                this.result = await this.client.query("UPDATE transactions SET value = $1, subject = $2, date = $3 WHERE ID = $4;", [
                    newValue,
                    newSubject,
                    newDate,
                    id
                ]);
            } else if (newValue && newSubject) {
                this.result = await this.client.query("UPDATE transactions SET value = $1, subject = $2 WHERE id = $3;", [
                    newValue,
                    newSubject,
                    id
                ]);
            } else if (newValue && newDate) {
                this.result = await this.client.query("UPDATE transactions SET value = $1, date = $2 WHERE id = $3;", [
                    newValue,
                    newDate,
                    id
                ]);
            } else if (newValue) {
                this.result = await this.client.query("UPDATE transactions SET value = $1 WHERE id = $2;", [
                    newValue,
                    id
                ]);
            } else if (newSubject && newDate) {
                this.result = await this.client.query("UPDATE transactions SET subject = $1, date = $2 WHERE id = $3;", [
                    newSubject,
                    newDate,
                    id
                ]);
            } else if (newSubject) {
                this.result = await this.client.query("UPDATE transactions SET subject = $1 WHERE id = $2;", [
                    newSubject,
                    id
                ]);
            } else if (newDate) {
                this.result = await this.client.query("UPDATE transactions SET date = $1 WHERE id = $2;", [
                    newDate,
                    id
                ]);
            } else {
                throw new Error("400: Request to update transaction it was poorly done");
            }

            await this.disconnect();

            return this.result.rows;
        } catch (error) {
            const [ statusCode ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                throw error;
            }

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
