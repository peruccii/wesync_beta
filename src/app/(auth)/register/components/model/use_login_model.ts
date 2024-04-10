import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from '@/app/schemas/login/schema';
import { useMutateLogin } from '../mutate/mutate';
import { User, UserProps } from '@/app/@core/domain/entities/user';
import { useFirebase } from '@/app/firebase/usage-firebase';

export const useRegister = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(loginFormSchema)})
  const { photoDefault } = useFirebase()
  const mutateLogin  = useMutateLogin()
  let delay = false

  const onSubmit = (data: UserProps) => mutateLogin.mutate({
    ...data,
    photo: photoDefault,
    status: 'ATIVO'
  })
 
  mutateLogin.isSuccess ? delay = true : delay

  return { handleSubmit, delay, register, errors, onSubmit, getValues}

}