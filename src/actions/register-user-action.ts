"use server"

import { CreateUserUseCase } from "@/app/@core/application/user/create-user.use-case";
import { UserProps } from "@/app/@core/domain/entities/user"
import { UserGateway } from "@/app/@core/domain/gateways/user/user.gateway";
import { Registry, container } from "@/app/@core/infra/containers/user/container-registry";

export const RegisterService = async (bodyRequest: UserProps) => {
  const usuarioGateway = container.get(Registry.UserGateway) as UserGateway;
  const cadastro = await new CreateUserUseCase(usuarioGateway).execute({
    ...bodyRequest,
  });
  return cadastro
}