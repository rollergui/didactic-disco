import Cpf from "../src/Cpf";
import Retiree from "../src/Retiree";

test("Should create retiree without benefits", function() {
  const retiree = new Retiree(new Cpf("333.720.717-00"));
  expect(retiree.getBenefitRegistrationNumbers()).toHaveLength(0);
});

test("Should create retiree with registered benefits", function() {
  const retiree = new Retiree(new Cpf("333.720.717-00"));
  retiree.addBenefitRegistrationNumber("123");
  retiree.addBenefitRegistrationNumber("234");
  expect(retiree.getBenefitRegistrationNumbers()).toHaveLength(2);
});