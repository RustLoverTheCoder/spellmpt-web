import type { APIRoute } from "astro";

export const get: APIRoute = ({ params, request }) => {
    return {
      body: JSON.stringify({
        message: "This was a GET!"
      })
    }
  };
  
  export const post: APIRoute = ({ request }) => {
    return {
      body: JSON.stringify({
        message: "这是一个 POST 请求！"
      })
    }
  }
  
  export const del: APIRoute = ({ request }) => {
    return {
      body: JSON.stringify({
        message: "这是一个 DELETE 请求！"
      })
    }
  }
  
  export const all: APIRoute = ({ request }) => {
    return {
      body: JSON.stringify({
        message: `这是一个 ${request.method} 请求！`
      })
    }
  }