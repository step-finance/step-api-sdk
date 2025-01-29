import { PortfolioPositionsResponse, PortfolioDataQueryParams } from "./types/aggregate";

export class StepAPIClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = "https://api.step.finance") {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, params: Record<string, any> = {}, method: string = "GET"): Promise<T> {
    const url = new URL(`${this.baseUrl}/${endpoint}`);
    url.searchParams.append("apiKey", this.apiKey);
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));

    const options: RequestInit = {
      method,
    };

    const response = await fetch(url.toString(), options);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
  }

  // Gets portfolio positions for a specified wallet, including summary with total values and stale statuses
  public async getPortfolioData(
    address: string,
    params?: PortfolioDataQueryParams,
  ): Promise<PortfolioPositionsResponse> {
    return await this.request<PortfolioPositionsResponse>(`v1/portfolio/all/${address}`, params);
  }

  public async invalidatePortfolioCache(address: string): Promise<void> {
    return await this.request<void>(`v1/portfolio/all/${address}`, {}, "DELETE");
  }
}
