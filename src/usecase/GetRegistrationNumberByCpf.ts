import BenefitGateway from "../infra/gateway/interface/BenefitGateway";
import Cpf from "../entity/Cpf";
import Retiree from "../entity/Retiree";

export default class GetRegistrationNumberByCpf {
  constructor (readonly benefitGateway: BenefitGateway) {}

  async execute({cpf, username, password}: Input): Promise<string[]> {
    const benefits = await this.benefitGateway.getBenefitRegistrationNumbers(username, password, cpf);
    const retiree = new Retiree(new Cpf(cpf));
    retiree.addBenefitRegistrationNumbers(benefits);
    return retiree.benefits;
  }
}

type Input = {
  cpf: string,
  username: string,
  password: string
};