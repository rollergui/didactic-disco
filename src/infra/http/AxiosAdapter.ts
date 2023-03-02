import axios from "axios";
import HTTPClient from "./HTTPClient";

export default class AxiosAdapter implements HTTPClient {
  async get(url: string, headers?: object | undefined): Promise<any> {
    const response = await axios.get(url, {headers});
    return response;
  }

  async post(url: string, body?: object | undefined, headers?: object | undefined): Promise<any> {
    const response = await axios.post(url, body, {headers});
    return response;
  }
}