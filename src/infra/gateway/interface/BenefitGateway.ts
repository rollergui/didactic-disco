export default interface BenefitGateway {
  getBenefitRegistrationNumbers(username: string, password: string, cpf: string): Promise<string[]>;
}