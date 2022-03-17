import express from "express";
import Lending from "./lending";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(Lending);

export default app;
