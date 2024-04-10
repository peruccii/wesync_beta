import { useMutation } from "@tanstack/react-query"
import { UserProps } from "@/app/@core/domain/entities/user"
import { RegisterService } from "@/actions/register-user-action"
import { LogService } from "@/actions/login-user-action"
import { useRouter } from "next/navigation"

export const useMutateLogin = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: (props: UserProps) => RegisterService(props),
    onSuccess: (props: UserProps) => {
      LogService(props)
      router.push('/dashboard')
    }
  })
}