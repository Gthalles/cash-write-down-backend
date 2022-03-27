import { Request, Response } from "express";
import { UpdateTransactionService } from "../service";

class UpdateTransactionController {
    public readonly service = new UpdateTransactionService();

    public async handle (req: Request, res: Response) {
        try {
            // eslint-disable-next-line max-len
            const response = this.service.execute(Number(req.params.id), req.body);

            return res.status(200).send(response);
        } catch (error) {
            const [
                statusCode,
                message
            ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                return res.status(statusCode).send(message);
            }

            return res.status(500).send("Unexpected failure on update transaction");
        }
    }
}

export { UpdateTransactionController };
