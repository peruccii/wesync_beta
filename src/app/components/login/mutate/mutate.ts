import { useMutation } from "@tanstack/react-query"
import { LoginService } from "../service/service"
import { UserProps } from "@/app/@core/domain/entities/user"

export const useMutateLogin = () => {
  return useMutation({
    mutationFn: (props: UserProps) => LoginService(props),
  })
}