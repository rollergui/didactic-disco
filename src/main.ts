import dotenv from "dotenv";
dotenv.config();

import BenefitController from "./controller/BenefitController";
import HTTPBenefitGateway from "./infra/gateway/HTTPBenefitGateway";
import AxiosAdapter from "./infra/http/AxiosAdapter";
import GetRegistrationNumberByCpf from "./usecase/GetRegistrationNumberByCpf";

const httpClient = new AxiosAdapter();
const benefitGateway = new HTTPBenefitGateway(httpClient);
const getRegistrationNumberByCpf = new GetRegistrationNumberByCpf(benefitGateway);
new BenefitController(getRegistrationNumberByCpf);