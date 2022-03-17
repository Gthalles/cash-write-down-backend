import { Lending } from "../controller/lending";
import { Router } from "express";

const router = Router();

router.get("/lending", new Lending().handle.bind(new Lending()));

export default router;
