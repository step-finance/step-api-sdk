import { StepAPIClient } from "../src";
import { PortfolioDataQueryParams } from "../src/types/aggregate";

const API_KEY = process.env.API_KEY;

describe("Portfolio API Client", () => {
  it("should fetch portfolio positions for a given address", async () => {
    if (!API_KEY) {
      throw new Error("API_KEY is not set");
    }
    const address = "8NoTrLoMnvBi2EMQGPcMKonR8G2f5LEEaBTw1xy8VwQi";

    const client = new StepAPIClient(API_KEY);
    const params: PortfolioDataQueryParams = {
      modules: "defi,nft,token",
    }
    const result = await client.getPortfolioData(address, params);
    console.log(result.status);
  });
});   