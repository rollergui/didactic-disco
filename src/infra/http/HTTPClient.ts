export default interface HTTPClient {
  get(url: string, headers?: object): Promise<HTTPResponse>;
  post(url: string, body?: object, headers?: object): Promise<HTTPResponse>;
}

type HTTPResponse = {
  status: number;
  data?: any;
  headers?: any;
}