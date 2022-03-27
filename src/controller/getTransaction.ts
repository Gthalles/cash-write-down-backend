import { Request, Response } from "express";
import { GetTransactionService } from "../service/index";

class GetTransactionController {
    private readonly service = new GetTransactionService();

    async handle (req: Request, res: Response) {
        try {
            const response = await this.service.execute(req.query);

            return res.status(200).send(response);
        } catch (error: any) {

            const [
                statusCode,
                message
            ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                res.status(statusCode).send(message);
            } else {
                res.status(500).send("Unexpected error getting transaction");
            }
        }
    }
}

export { GetTransactionController };
