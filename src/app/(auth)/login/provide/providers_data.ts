import { signIn, useSession } from "next-auth/react";
import MutateProviders from "../mutate/mutate_providers";

type ProviderNamesProps = {
  provider_name: string;
};

export const useProviderData = ({ provider_name }: ProviderNamesProps) => {
  const { data: session } = useSession();
  const { onSubmitProvider } = MutateProviders();

  const handleSignInWithGitHub = async () => {
    const result = await signIn(provider_name);
    if (result?.error) {
      console.error("Provider sign-in error:", result.error);
    } else if (session) {
      onSubmitProvider();
    }
  };

  return { handleSignInWithGitHub };
};
