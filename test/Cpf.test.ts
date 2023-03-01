import Cpf from "../src/Cpf";

test.each([
	"407.302.170-27",
	"684.053.160-00",
	"746.971.314-01"
])("Should test valid cpf", function (value) {
	const cpf = new Cpf(value);
	expect(cpf.number).toBeDefined();
});

test.each([
	"406.302.170-27",
	"406302170",
	"406302170123456789",
	"406302170123456789",
  "111.111.111-11",
	"222.222.222-22",
  ""
])("Should test invalid cpf", function (value) {
	expect(() => new Cpf(value)).toThrow(new Error("Invalid cpf"));
});