import { Lending } from "../client";

class LendingService {

    public readonly database = new Lending();

    public constructor () {
        this.execute();
        console.log("Lending SERVICE works!!");
    }

    public async execute () {
        await this.database.getLendings();
    }
}

export { LendingService };
