import cors from "cors";
import express from "express";
import routes from "./route/index";

class App {
    public express: express.Application;

    public constructor () {
        this.express = express();
        this.express.use(routes);
    }

    private middlewares () {
        this.express.use(express.json());
        this.express.use(cors());
    }
}

export { App };
