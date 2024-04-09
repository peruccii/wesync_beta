import { useMutation } from "@tanstack/react-query"
import { UserProps } from "@/app/@core/domain/entities/user"
import { redirect, useRouter } from "next/navigation"
import { RegisterService } from "@/actions/register-user-action"
import { LogService } from "@/actions/login-user-action"

export const useMutateLogin = () => {
  return useMutation({
    mutationFn: (props: UserProps) => RegisterService(props),
    onSuccess: (props: UserProps) => {
      LogService(props)
      redirect('/dashboard')
    }
  })
}