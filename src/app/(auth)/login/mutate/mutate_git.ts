import { useMutation } from "@tanstack/react-query"
import { useSession } from "next-auth/react";
import { GitHubService } from "../service/provider_service";
import { UserProps } from "@/app/@core/domain/entities/user";

export const useMutateGithub = () => {
 return useMutation({
  mutationFn: async () => {
   try {
    const { data: session, status } = useSession();
    if (status === 'authenticated') {
     try {

       const userProps: UserProps = 
       {
         email: session.user?.email as string,
         name: session.user?.name as string,
         password: 'senhagitubhuv',
         status: 'ATIVO',
         photo: session.user?.image as string 
       };

       const response = await GitHubService(userProps);
       
       // const log = await LogService(userProps)
       console.log("User created with providers data:", response);

     } catch (error) {

       console.error("Error creating user with providers data:", error);
     }
   }
   } catch (err) {
    throw Error
   }
  }
 })
}