import Lending from "./lending";
import Transaction from "./transaction";
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(Lending);
app.use(Transaction);

export default app;
