import {
    AddTransactionController,
    DeleteTransactionController,
    GetTransactionController,
    UpdateTransactionController
} from "../controller";
import { Router } from "express";

const router = Router();

router.get("/transactions", new GetTransactionController().handle.bind(new GetTransactionController()));

router.post("/transaction", new AddTransactionController().handle.bind(new AddTransactionController()));

router.delete("/transaction/:id", new DeleteTransactionController().handle.bind(new DeleteTransactionController()));

router.put("/transaction/:id", new UpdateTransactionController().handle.bind(new UpdateTransactionController()));

export default router;
