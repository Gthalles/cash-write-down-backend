import { Pool } from "pg";

class Postgres {
    private connection: any;

    public readonly client = new Pool({
        user: "postgres",
        password: "postgres",
        host: "localhost",
        database: "cash_write_down",
        port: 5432,
    });

    public async connect () {
        try {
            this.connection = await this.client.connect();

        } catch (error) {
            throw new Error("500: Erro ao tentar conectar ao BD!");
        }
        console.log("Conectando ao PostgreSQL!");
    }

    public async disconnect () {
        try {
            this.connection = await this.connection.release();
        } catch (error) {
            throw new Error("500: Erro ao tentar desconectar do BD!");
        }
        console.log("Desconectando do PostgreSQL!");
    }
}

export { Postgres };
