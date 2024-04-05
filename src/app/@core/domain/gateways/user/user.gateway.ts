import { User, UserProps } from "../../entities/user";

export interface UserGateway {
 create(user: UserProps): Promise<User>
}