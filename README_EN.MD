# Deno Universal Website Proxy

## Introduction
A universal website proxy service implemented with Deno, capable of proxying access to any website. Particularly suitable for scenarios requiring bypassing geographical restrictions or website mirroring.

## Key Features
- Support proxying any website
- Support all HTTP methods (GET, POST, PUT, etc.)
- Built-in CORS support for cross-origin access
- Automatic handling of request and response headers
- Error handling and security mechanisms
- Simple deployment with Deno Deploy

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

## Usage Examples
Assuming your Deno Deploy domain is `my-proxy.deno.dev` and target website is `example.com`:

1. Access homepage:
```
https://my-proxy.deno.dev/
```

2. Access specific pages on target website:
```
https://my-proxy.deno.dev/path/to/page
=> Proxies to: https://example.com/path/to/page
```

3. Requests with query parameters:
```
https://my-proxy.deno.dev/search?q=test
=> Proxies to: https://example.com/search?q=test
```

## Configuration
In `main.ts`:
```typescript
const TARGET_HOST = "example.com"; // Change to your target website
```

## Security Notes
- Proxy server filters sensitive request headers
- CORS support enabled for all requests
- Recommended to add appropriate access control in production

## Important Notes
1. Ensure you have permission to access and proxy the target website
2. Some websites may detect and block proxy access
3. Recommended to comply with target website's terms of service
4. Proxy service may expose your server IP

## License
MIT License