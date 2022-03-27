import { Request, Response } from "express";
import { GetLendingService } from "../service/index";

class GetLendingController {
    private readonly service = new GetLendingService();

    public async handle (req: Request, res: Response) {
        console.log("Lending Controller Works!!");
        try {
            const response = await this.service.execute(req.query);

            return res.status(200).send(response);
        } catch (error) {
            const [
                statusCode,
                message
            ] = error.message.split(":");

            if (statusCode > 99 && statusCode < 600) {
                return res.status(statusCode).send(message);
            } else {
                return res.status(500).send("Unexpected error on listing lendings");
            }
        }
    }
}

export { GetLendingController };
