import { User } from "@/app/@core/domain/entities/user";
import { UserGateway } from "@/app/@core/domain/gateways/user/user.gateway";
import { AxiosInstance } from "axios";

export class UserHttpGatweay implements UserGateway {

 constructor(private httpClient: AxiosInstance){}

 async create(user: User): Promise<User> {
  return this.httpClient.post('/users', user).then(() => { return user }).
  catch((error) => {
  console.error("Error creating consultants:", error);
  throw error;
 }); 
 };
} ;