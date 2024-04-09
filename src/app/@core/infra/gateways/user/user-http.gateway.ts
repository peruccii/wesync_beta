import { User, UserProps } from "@/app/@core/domain/entities/user";
import { UserGateway } from "@/app/@core/domain/gateways/user/user.gateway";
import { AxiosInstance } from "axios";

export class UserHttpGatweay implements UserGateway {

 constructor(private httpClient: AxiosInstance){}

 async create(user: User): Promise<User> {
  return this.httpClient.post('/users', user).then(() => {  console.log('user', user); return user }).
  catch((error) => {
  console.error("Error creating user:", error);
  console.error(" user:", user);
  throw error;
 }); 
 };

 async login(user: User): Promise<User> {
  return this.httpClient.post('/users/login', user).then(() => { console.log('logado'); return user }).
  catch((error) => {
  console.error("Error to loggin", error);
  throw error;
 }); 
 }
} ;