import { Router } from "express";
// TODO: Lending Controller
// TODO: Middleware


const router = Router();

router.route("/lending")
    .get((req, res) => {
        res.send("Lending route works!!");
    });

export default router;