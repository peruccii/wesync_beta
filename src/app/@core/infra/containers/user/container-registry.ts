import { Container } from "inversify";
import { http } from "@/utils/http";
import { UserHttpGatweay } from "../../gateways/user/user-http.gateway";
import { CreateUserUseCase } from "@/app/@core/application/user/create-user.use-case";
import { LoginUserUseCase } from "@/app/@core/application/user/login-user.use-case";

export const Registry = {
 AxiosAdapter: Symbol.for("AxiosAdapter"),
 UserGateway: Symbol.for("UserGateway"),
 CreateUserUseCase: Symbol.for("CreateUserUseCase"),
 LoginUserUseCase: Symbol.for("LoginUserUseCase")
}

export const container = new Container()

container.bind(Registry.AxiosAdapter).toConstantValue(http);
container.bind(Registry.UserGateway).toDynamicValue((context)=> {
    return new UserHttpGatweay(context.container.get(Registry.AxiosAdapter))
});

container.bind(Registry.CreateUserUseCase).toDynamicValue((context)=> {
 return new CreateUserUseCase(context.container.get(Registry.UserGateway))
});

container.bind(Registry.LoginUserUseCase).toDynamicValue((context)=> {
    return new LoginUserUseCase(context.container.get(Registry.UserGateway))
   });