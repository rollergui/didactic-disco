import Cpf from "./Cpf";

export default class Retiree {
  benefits: string[] = [];

  constructor(readonly cpf: Cpf) {}

  getBenefitRegistrationNumbers(): string[] {
    return this.benefits;
  }

  addBenefitRegistrationNumber(registrationNumber: string): void {
    this.benefits.push(registrationNumber);
  }
}