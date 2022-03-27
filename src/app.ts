import express from "express";
import routes from "./route/index";

class App {
    public express: express.Application;

    public constructor () {
        this.express = express();
        this.express.use(routes);
    }
}

export { App };
