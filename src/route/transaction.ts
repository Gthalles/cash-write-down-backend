import { GetTransactionController } from "../controller/getTransaction";
import { Router } from "express";

const router = Router();

router.get("/transactions", new GetTransactionController().handle.bind(new GetTransactionController()));

export default router;
