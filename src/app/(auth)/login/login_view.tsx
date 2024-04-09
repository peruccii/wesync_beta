import { Button } from "@/components/ui/button";
import GitHubButton from "./github_button"
import GoogleButton from "./google_button";
import NewAccountButton from "./new_account_button";
import { signOut } from "next-auth/react";
import { useLogin } from "./model/login_model";

export function LoginView(props: ReturnType<typeof useLogin>) {
  const { errors, handleSubmit, onSubmit, register } = props;
  return (
    <div className="flex items-stretch bg-[#0b0c0e]">
      <div className="flex-1 bg-black bg-cover bg-center max-[1100px]:hidden" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex-[560px_1_0] min-[1101px]:max-w-[560px] max-[1100px]:flex-1">
        <div className="h-[100dvh] bg-gray-850 p-20 overflow-auto max-[1100px]:h-auto max-[1100px]:min-h-[calc(100dvh-16px)] max-[1100px]:p-7">
          <div className="flex flex-col">
            <h1 className="font-bold text-gray-200 text-2xl  mb-7 max-md:mt-12 max-md:mb-8">
              Acesse sua conta
            </h1>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 text-sm text-gray-200">
                <label htmlFor="email">E-mail</label>
                <div className="group flex w-full h-12 px-4 py-3 justify-center items-center gap-2 rounded-xl border border-solid border-[#27282a] focus-within:border-rose-600 bg-black box-border transition-opacity">
                  <input
                    {...register("email")}
                    required
                    className="outline-none border-none w-full h-full text-gray-100 text-base font-normal bg-transparent placeholder:text-gray-400 transition-colors"
                    placeholder="Seu e-mail"
                    type="email"
                    name="email"
                  />
                  {errors && errors.email?.message}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 text-sm text-gray-200">
                  <label htmlFor="password">Senha</label>
                  <div className="group flex w-full h-12 px-4 py-3 justify-center items-center gap-2 rounded-xl border border-solid border-[#27282a] focus-within:border-rose-600 bg-black box-border transition-opacity">
                    <input
                      {...register("password")}
                      className="outline-none border-none w-full h-full text-gray-100 text-base font-normal bg-transparent placeholder:text-gray-400 transition-colors"
                      placeholder="Sua senha"
                      required
                      type="password"
                      name="password"
                    />
                    {errors && errors.password?.message}
                    <span className="flex flex-shrink-0 justify-center items-center size-6 :size-6 text-gray-500 group-focus-within:text-purpleseat">
                      <button type="button">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="text-gray-500"
                          width="24"
                          height="24"
                        >
                          <path
                            d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                          ></path>
                          <circle
                            cx="256"
                            cy="256"
                            r="80"
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                          ></circle>
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
                <a
                  className="text-sm font-medium text-rose-500 hover:brightness-125 transition"
                  href="/forgot"
                >
                  Esqueci minha senha
                </a>
              </div>
              <button
                type="submit"
                className="relative inline-flex flex-shrink-0 justify-center items-center rounded-full transition-colors ease-in-out duration-200 font-bold disabled:opacity-50 disabled:cursor-not-allowed disabled:select-none border-none cursor-pointer bg-rose-600 hover:enabled:bg-rose-700/85 text-white px-8 py-3 text-2xl"
              >
                <div className="flex  flex-1 justify-center items-center gap-2">
                  <span className="text-base leading-6">Entrar</span>
                </div>
              </button>
            </div>        
           <GitHubButton/>
           <Button onClick={() => signOut()}>Deslogar</Button>
           <GoogleButton/>
            <div className="w-full h-[2px] bg-[#27282a] mb-6 mt-16 max-md:mt-12"></div>
            <NewAccountButton link="/register"
            title="Não tem uma conta?"
            span="Se inscreva gratuitamente"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
