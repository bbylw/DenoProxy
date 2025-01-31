# Deno Universal Website Proxy

## Introduction
A universal website proxy service implemented with Deno, capable of proxying access to any website. Particularly suitable for scenarios requiring bypassing geographical restrictions or website mirroring.

## Key Features
- Support proxying any website
- Maintain original request integrity
- Automatic target domain replacement
- Support all HTTP methods (GET, POST, PUT, etc.)
- Simple and efficient implementation

## Local Development
1. Ensure Deno is installed
2. Clone the project locally
3. Modify `TARGET_HOST` in `main.ts` to your target website domain
4. Run the development server:
```bash
deno run --allow-net main.ts
```

## Deno Deploy (Recommended)
1. Login/Register at [https://dash.deno.com/account/projects](https://dash.deno.com/account/projects)
2. Click "New Project" in the top right
3. Choose "Deploy from GitHub" or copy `main.ts` code into Playground
4. Modify the `TARGET_HOST` variable to your target website domain
5. Click Save & Deploy
6. Wait for deployment to complete, you'll get a `xxx.deno.dev` domain

## How It Works
The proxy server automatically replaces the hostname in requests with the target website's hostname while keeping the rest of the URL unchanged:

Assume:
- Your proxy service domain: `my-proxy.deno.dev`
- Target website domain: `target-host`

Then:
```
https://my-proxy.deno.dev/* -> https://target-host/*

Examples:
https://my-proxy.deno.dev/api/data -> https://target-host/api/data
https://my-proxy.deno.dev/page?id=1 -> https://target-host/page?id=1
```

All request methods (GET, POST, etc.) and request bodies are forwarded unchanged.

## Configuration
In `main.ts`:
```typescript
const TARGET_HOST = "target-host"; // Change to your target website
```

## Important Notes
1. Ensure you have permission to access and proxy the target website
2. Some websites may detect and block proxy access
3. Recommended to comply with target website's terms of service
4. Proxy service may expose your server IP

## License
MIT License