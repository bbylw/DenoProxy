# Deno 通用网站代理

## 项目简介
使用 Deno 实现的通用网站代理服务，可以代理访问任意网站。特别适合需要突破地域限制或进行网站镜像的场景。

## 主要特性
- 支持代理任意网站
- 支持所有 HTTP 方法（GET, POST, PUT 等）
- 内置 CORS 支持，允许跨域访问
- 自动处理请求头和响应头
- 错误处理和安全机制
- 部署简单，使用 Deno Deploy 一键部署

## 本地开发
1. 确保已安装 Deno
2. 克隆项目到本地
3. 修改 `main.ts` 中的 `TARGET_HOST` 为你想要代理的网站域名
4. 运行开发服务器：
```bash
deno run --allow-net main.ts
```

## Deno Deploy 部署（推荐）
1. 登录/注册 [https://dash.deno.com/account/projects](https://dash.deno.com/account/projects)
2. 点击右上角的 New Project
3. 选择 "Deploy from GitHub" 或直接复制 `main.ts` 代码到 Playground
4. 修改 `TARGET_HOST` 变量为你要代理的目标网站域名
5. 点击 Save & Deploy
6. 等待部署完成，你会获得一个 `xxx.deno.dev` 的域名

## 使用示例
假设你的 Deno Deploy 域名是 `my-proxy.deno.dev`，目标网站是 `example.com`：

1. 访问首页：
```
https://my-proxy.deno.dev/
```

2. 访问目标网站的具体页面：
```
https://my-proxy.deno.dev/path/to/page
=> 将代理到：https://example.com/path/to/page
```

3. 带查询参数的请求：
```
https://my-proxy.deno.dev/search?q=test
=> 将代理到：https://example.com/search?q=test
```

## 配置说明
在 `main.ts` 中：
```typescript
const TARGET_HOST = "example.com"; // 修改为你要代理的目标网站
```

## 安全说明
- 代理服务器会过滤掉一些敏感的请求头
- 所有请求都启用了 CORS 支持
- 建议在生产环境中添加适当的访问控制

## 注意事项
1. 确保你有权限访问和代理目标网站
2. 某些网站可能会检测和阻止代理访问
3. 建议遵守目标网站的使用条款和规定
4. 代理服务可能会暴露你的服务器 IP

## 许可证
MIT License