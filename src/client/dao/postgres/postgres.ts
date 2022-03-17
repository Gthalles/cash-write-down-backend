import pg from "pg";

class Postgres
{
    public static client = new pg.Client({
        user: "postgres",
        host: "localhost",
        database: "",
        port: 5432,
    });
}

export { Postgres };
