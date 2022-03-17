// TODO: IMPORT SERVICE
import { LendingService } from "../service/index";

class Lending {
    private readonly service = new LendingService();

    public lendingService = new LendingService();

    public handle (req: Request, res: Response) {
        console.log("Lending Controller Works!!");

        this.service.execute();
    }
}

export { Lending };
