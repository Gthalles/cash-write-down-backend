import Lending from "./lending";
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(Lending);

export default app;
