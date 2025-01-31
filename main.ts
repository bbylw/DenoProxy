const TARGET_HOST = "example.com"; // 替换为需要代理的目标网站

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  // 首页显示代理状态
  if (url.pathname === '/' || url.pathname === '/index.html') {
    return new Response('Proxy is Running!', {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  }

  // 构建目标URL
  const targetUrl = new URL(url.pathname + url.search, `https://${TARGET_HOST}`);

  try {
    // 转发所有合法的请求头
    const headers = new Headers();
    for (const [key, value] of request.headers.entries()) {
      // 跳过一些特殊的头部
      if (!['host', 'origin', 'referer'].includes(key.toLowerCase())) {
        headers.set(key, value);
      }
    }

    // 创建新的请求
    const newRequest = new Request(targetUrl.toString(), {
      method: request.method,
      headers: headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
      redirect: 'follow'
    });

    // 发送请求到目标服务器
    const response = await fetch(newRequest);

    // 处理响应头
    const responseHeaders = new Headers(response.headers);
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', '*');

    // 返回响应
    return new Response(response.body, {
      status: response.status,
      headers: responseHeaders
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// @ts-ignore
Deno.serve(handleRequest);