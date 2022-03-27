import { AddTransactionController } from "../controller/addTransaction";
import { DeleteTransactionController } from "../controller";
import { GetTransactionController } from "../controller/getTransaction";
import { Router } from "express";

const router = Router();

router.get("/transactions", new GetTransactionController().handle.bind(new GetTransactionController()));

router.post("/transaction", new AddTransactionController().handle.bind(new AddTransactionController()));

router.delete("/transaction/:id", new DeleteTransactionController().handle.bind(new DeleteTransactionController()));

export default router;
