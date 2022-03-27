import { App } from "./app";

/*
 * Route é responsável pela chamada do controller e envio da url para o app;
 * Controller é responsável pela chamada do Service e pelo envio da response;
 * Service é responsável por toda a regra de negócio (Validação, Schemas e etc);
 */
const app = new App();

app.express.listen(3001);
