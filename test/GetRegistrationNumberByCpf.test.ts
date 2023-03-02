import BenefitGateway from "../src/BenefitGateway";
import GetRegistrationNumberByCpf from "../src/GetRegistrationNumberByCpf";

test("Should return benefit number list", async function() {
  const benefitGateway: BenefitGateway = {
    async getBenefitRegistrationNumbers(username: string, password: string, cpf: string): Promise<string[]> {
      return ["1234"];
    }
  };
  const useCase = new GetRegistrationNumberByCpf(benefitGateway);
  const result = await useCase.execute({cpf: "407.302.170-27", username: "username", password: "password"});
  expect(result).toEqual(["1234"]);
});