import express, { Express, Request, Response, NextFunction } from "express";
import GetRegistrationNumberByCpf from "../usecase/GetRegistrationNumberByCpf";

export default class BenefitController {
  app: Express

  constructor(readonly getRegistrationNumberByCpf: GetRegistrationNumberByCpf) {
    this.app = express();
    this.app.use(express.json());
    this.registerRoutes();
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
          console.log(error);
          next(error);
        }
      }
    );
  }
}