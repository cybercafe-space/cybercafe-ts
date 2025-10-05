# Cybercafe TypeScript SDK

[![npm version](https://img.shields.io/npm/v/cybercafe.svg)](https://www.npmjs.com/package/cybercafe)


## Generate an API Key
[Sign up at Cybercafe](https://cybercafe.space/register) and generate an API key from the dashboard.


## Install the SDK
Install the SDK using npm:

```bash
npm install cybercafe
```


## Configure the Client
Import and configure the Cybercafe client with your API key:

```typescript
import { Cybercafe } from "cybercafe";

const client = new Cybercafe("YOUR_API_KEY");
```


## Connect to a Space
Connect to a running Space using its `SPACE_ID`:

```typescript
const space = client.space("SPACE_ID");
```


## Interact with the Space
Use controllers to interact with the Space. For example, take a screenshot:

```typescript
import fs from "fs";

(async () => {
  const screenshot = await space.Screen.screenshot();
  const buffer = Buffer.from(screenshot, "base64");
  fs.writeFileSync("screenshot.png", buffer);
})();
```
