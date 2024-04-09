import { useSession } from "next-auth/react";
import { GitHubService } from "../service/provider_service";
import { UserProps } from "@/app/@core/domain/entities/user";
import { useFirebase } from "@/app/firebase/usage-firebase";
import { redirect } from "next/navigation";
import { LogService } from "@/actions/login-user-action";

const MutateProviders = () => {
  const { photoDefault } = useFirebase();
  const { data: session, status } = useSession();

  const onSubmitProvider = async () => {
    if (status === "authenticated") {
      try {
        const userProps: UserProps = {
          email: session.user?.email as string,
          name: session.user?.name as string,
          password: "senhagitubhuv",
          status: "ATIVO",
          photo: session.user?.image as string || photoDefault,
        };

        const response = await GitHubService(userProps);
        if (response) {
          const rs = await LogService(userProps);
          if (rs) {
            console.log('logado')
            redirect("/dashboard");
          }
        }
        console.log("User created with providers data:", response);
      } catch (error) {
        console.error("Error creating user with providers data:", error);
      }
    }
  };

  return { onSubmitProvider };
};

export default MutateProviders;
