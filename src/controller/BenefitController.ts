import { AxiosError } from "axios";
import express, { Express, Request, Response, NextFunction } from "express";
import InvalidCpfError from "../error/InvalidCpfError";
import HTTPError from "../infra/http/HTTPError";
import HTTPErrorHandler from "../infra/http/HTTPErrorHandler";
import GetRegistrationNumberByCpf from "../usecase/GetRegistrationNumberByCpf";

export default class BenefitController {
  app: Express

  constructor(readonly getRegistrationNumberByCpf: GetRegistrationNumberByCpf) {
    this.app = express();
    this.app.use(express.json());
    this.registerRoutes();
    this.pokemonErrorHandler();
    this.app.listen(3000);
  }

  registerRoutes(): void {
    this.app.post(
      "/fetch-benefit-numbers",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const output = await this.getRegistrationNumberByCpf.execute(req.body);
          res.json(output);
        } catch(error: any) {
          next(error)
        }
      }
    );
  }

  pokemonErrorHandler() {
    this.app.use((error: any, req: Request, res: Response, next: NextFunction) => {
      let httpError: HTTPError;
      switch(error.constructor) {
        case AxiosError:
          httpError = new HTTPError(error.response.data, error.response.status);
          break;
        case InvalidCpfError:
          httpError = new HTTPError(error.message, 422);
          break;
        default:
          console.log("default error")
          httpError = new HTTPError(error.message);
      }
      HTTPErrorHandler.handle(httpError, res);
    });
  }
}