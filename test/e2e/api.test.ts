import axios from "axios";

axios.defaults.validateStatus = () => true;

test("Should respond with an error for invalid cpf", async function () {
	const input = {
		cpf: "406.302.170-00",
		username: "",
    password: ""
	}
	const response = await axios.post("http://localhost:3000/fetch-benefit-numbers", input);
	const output = response.data;
	expect(response.status).toBe(422);
	expect(output.message).toBe("Cpf inválido");
});

test("Should respond with an error for invalid credentials", async function () {
	const input = {
		cpf: "684.053.160-00",
		username: "",
    password: ""
	}
	const response = await axios.post("http://localhost:3000/fetch-benefit-numbers", input);
	expect(response.status).toBe(401);
});