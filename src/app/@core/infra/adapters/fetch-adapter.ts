import { http } from "@/utils/http"

export interface HttpClient<R = any> {
 request: (data: HttpRequest) => Promise<R>
}

export type HttpResponse<T = any> = {
 bodt?: T
}

export type HttpRequest = {
 url: string;
 method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' 
 body?: any;
 headers?: {
  Authorization?: string; 
  'Content-Type'?: string;
};
}

export class FetchHttpClientAdapter implements HttpClient {
 async request( data:HttpRequest ) {
  let fetchResponse

  try {
   const response = await fetch(http + data.url, {
    method: data.method,
    body: data.body,
    
   })

   fetchResponse = await response.json()
   console.log('ola', fetchResponse);
   
  } catch (err) {
   const _error = err as Error;
   throw new Error(_error.message)
  }

  return {
   statusCode: fetchResponse.statusCode,
   body: fetchResponse
  }
 }
}