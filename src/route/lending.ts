import { GetLendingController } from "../controller";
import { Router } from "express";

const router = Router();

router.get("/lending", new GetLendingController().handle.bind(new GetLendingController()));

export default router;
