import { User, UserProps } from "../../entities/user";

export interface UserGateway {
 create(user: UserProps): Promise<User>
 login(user: UserProps): Promise<User>
}