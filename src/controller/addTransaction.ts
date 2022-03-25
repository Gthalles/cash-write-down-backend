import { Request, Response } from "express";
import { AddTransactionService } from "../service/index";

class AddTransactionController {
    public readonly service = new AddTransactionService();

    // eslint-disable-next-line class-methods-use-this
    async handle (req: Request, res: Response) {
        try {
            await this.service.execute(req.body);

            console.log("Transaction criada com sucesso!");

            return res.status(200).end();
        } catch (error: any) {
            const [
                statusCode,
                message
            ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                return res.status(statusCode).send(message);
            } else {
                throw new Error("500: Error in Controller");
            }
        }

    }
}

export { AddTransactionController };
