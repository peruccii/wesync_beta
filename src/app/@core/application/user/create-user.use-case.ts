import { User, UserProps } from "../../domain/entities/user";
import { UserGateway } from "../../domain/gateways/user/user.gateway";

export class CreateUserUseCase {
 constructor(public createUserGateway: UserGateway){}

 /**
   * Execute 'create' of UserGateway giving 'user' props.
   *
   * @param user - data.
   * @returns Show the proprieties of the user
   */

 async execute(user: UserProps): Promise<User> {
  return this.createUserGateway.create(user)
 }
}