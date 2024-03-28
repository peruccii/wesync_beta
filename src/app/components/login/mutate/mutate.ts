import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { LoginService } from "../service/service"

export const useMutateLogin = (props: BodyRequest = {}) => {
  return useMutation<AxiosError<string>, Login>({
    mutationFn: bodyRequest => LoginService(bodyRequest),
    ...props,
  })
}