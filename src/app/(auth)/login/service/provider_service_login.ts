import { LoginUserUseCase } from "@/app/@core/application/user/login-user.use-case";
import { UserProps } from "@/app/@core/domain/entities/user";
import { UserGateway } from "@/app/@core/domain/gateways/user/user.gateway";
import { Registry, container } from "@/app/@core/infra/containers/user/container-registry";

export const ProviderLogService = async (bodyRequest: UserProps) => {
 const usuarioGateway = container.get(Registry.UserGateway) as UserGateway;
 const login = await new LoginUserUseCase(usuarioGateway).execute({
  ...bodyRequest
});
if ( login ) {
  console.log('usuario logado')
}
return { ProviderLogService }
}