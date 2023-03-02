import HTTPClient from "../http/HTTPClient";
import BenefitGateway from "./interface/BenefitGateway";

export default class HTTPBenefitGateway implements BenefitGateway {
  private baseUrl: string;

  constructor(readonly httpClient: HTTPClient) {
    this.baseUrl = process.env.BASE_URL as string;
  }

  async getBenefitRegistrationNumbers(username: string, password: string, cpf: string): Promise<string[]> {
    const loginResponse = await this.httpClient.post(
      `${this.baseUrl}/login`,
      { login: username, senha: password }
    );
    if (loginResponse.status !== 200) throw new Error("Invalid credentials");
    const token = loginResponse?.headers?.authorization;
    if (!token) throw new Error("Token missing");

    const response = await this.httpClient.get(
      `${this.baseUrl}/offline/listagem/${cpf}`,
      { Authorization: token }
    );
    return response.data.beneficios.map((b: any) => b.nb);
  }

}