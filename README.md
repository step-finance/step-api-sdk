# Step API SDK

This SDK provides a simple and efficient way to interact with the Step API.

## Installation

Install the SDK using pnpm:

```bash
npm install @stepfinance/step-api-sdk
```

---

## Usage

### Initialize the Client

To start using the SDK, initialize the `StepAPIClient` with your API key:

```typescript
import { StepAPIClient } from ‘@stepfinance/step-api-sdk’

const API_KEY = "<your-key-here>";

// Insert an API key generated from your dashboard
const client = new StepAPIClient(API_KEY);
```

### Fetch Portfolio Data

Retrieve portfolio data for a specific wallet address:

```typescript
(async () => {
  try {
    const data = await client.getPortfolioData(address, {
      modules: "token,nft,liquidity",
    });

    console.log("Positions:", data);
  } catch (error) {
    console.error("Error fetching positions:", error);
  }
})();
```

## API Reference

See the [API Reference](https://api-docs.step.finance/api-reference/portfolio) for more information.

## Testing

Run the tests to ensure the SDK works as expected:

```bash
pnpm test
```
