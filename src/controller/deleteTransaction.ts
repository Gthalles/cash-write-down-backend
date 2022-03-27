import { Request, Response } from "express";
import { DeleteTransactionService } from "../service";

class DeleteTransactionController {
    public readonly service =  new DeleteTransactionService();

    public async handle (req: Request, res: Response) {
        try {
            const response = await this.service.execute(Number(req.params.id));

            return res.status(200).send(response);
        } catch (error: any) {
            const [
                statusCode,
                message
            ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                return res.status(statusCode).send(message);
            }

            return res.status(500).send("Unexpected failure on delete transaction");
        }
    }
}

export { DeleteTransactionController };
