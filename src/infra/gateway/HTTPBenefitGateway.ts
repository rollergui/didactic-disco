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
    const token = loginResponse?.headers?.authorization;
    const response = await this.httpClient.get(
      `${this.baseUrl}/offline/listagem/${cpf}`,
      { Authorization: token }
    );
    return response.data.beneficios.map((b: any) => b.nb);
  }
}