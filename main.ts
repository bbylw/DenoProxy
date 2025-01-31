const TARGET_HOST = "目标地址"; // 替换为需要代理的目标网站

async function handleRequest(request: Request): Promise<Response> {
  // 从原始请求中获取 URL
  const url = new URL(request.url);
  
  // 只替换 hostname，保持其他部分不变
  url.hostname = TARGET_HOST;
  
  try {
    // 创建新的请求，保持原始请求的所有属性
    const newRequest = new Request(url, {
      method: request.method,
      headers: request.headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
      redirect: 'manual'
    });

    // 直接转发请求
    const response = await fetch(newRequest);
    
    // 返回响应
    return response;
  } catch (error) {
    console.error('Proxy error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// @ts-ignore
Deno.serve(handleRequest);