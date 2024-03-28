import { http } from "@/utils/http"

  export const LoginService = async (bodyRequest: Login) => {
    const { data } = await http.post('/login', {
      body: { bodyRequest }
    })
    return data
  }