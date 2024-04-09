import { useMutation } from "@tanstack/react-query"
import { UserProps } from "@/app/@core/domain/entities/user"

import { useRouter } from "next/navigation"
import { LogService } from "@/actions/login-user-action"


export const useMutateLoginLogin = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: (props: UserProps) => LogService(props),
    onSuccess: () => {
      router.push('/dashboard')
    }
  })
}