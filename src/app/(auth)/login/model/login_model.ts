import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from '@/app/schemas/login/schema';
import { User, UserProps } from '@/app/@core/domain/entities/user';
import { useMutateLoginLogin } from '../mutate/mutate_login';


export const useLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(loginFormSchema)})
  const mutateLogin  = useMutateLoginLogin()

   const onSubmit = (data: UserProps) =>{ mutateLogin.mutate({
     ...data,
   })}

  // async function onSubmit(data: UserProps) {
  //   const res = await signIn<"credentials">("credentials", {
  //     ...data,
  //     photo: photoDefault,
  //     status: 'ATIVO',
  //     redirect: false
  //   })
  //  }

  return { handleSubmit, register, errors, onSubmit}

}