import { AddTransactionController } from "../controller/addTransaction";
import { GetTransactionController } from "../controller/getTransaction";
import { Router } from "express";

const router = Router();

router.get("/transactions", new GetTransactionController().handle.bind(new GetTransactionController()));

router.post("/add/transaction", new AddTransactionController().handle.bind(new AddTransactionController()));

export default router;
