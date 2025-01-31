# Deno 通用网站代理

## 项目简介
使用 Deno 实现的通用网站代理服务，可以代理访问任意网站。特别适合需要突破地域限制或进行网站镜像的场景。

## 主要特性
- 支持代理任意网站
- 保持原始请求的完整性
- 自动替换目标域名
- 支持所有 HTTP 方法（GET, POST, PUT等）
- 简单高效的实现

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

## 工作原理
代理服务器会自动将请求中的域名替换为目标网站域名，同时保持URL的其他部分不变：

假设：
- 你的代理服务域名：`my-proxy.deno.dev`
- 目标网站域名：`ygpy.net`

则：
```
https://my-proxy.deno.dev/* -> https://ygpy.net/*

例如：
https://my-proxy.deno.dev/api/data -> https://ygpy.net/api/data
https://my-proxy.deno.dev/page?id=1 -> https://ygpy.net/page?id=1
```

所有的请求方法（GET、POST等）和请求体都会被保持不变地转发。

## 配置说明
在 `main.ts` 中：
```typescript
const TARGET_HOST = "ygpy.net"; // 修改为你要代理的目标网站
```

## 注意事项
1. 确保你有权限访问和代理目标网站
2. 某些网站可能会检测和阻止代理访问
3. 建议遵守目标网站的使用条款和规定
4. 代理服务可能会暴露你的服务器 IP

## 许可证
MIT License