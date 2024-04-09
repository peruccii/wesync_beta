export type UserProps = {
 id?: number | null;
 name?: string;
 password: string;
 email: string;
 photo?: string;
 status?: 'ATIVO' | 'INATIVO';
}

export class User {
 constructor(public props: UserProps) {}

 get id() {
  return this.props.id;
 }
 get name() {
  return this.props.name;
 }
 get password() {
  return this.props.password;
 }
 get email() {
  return this.props.email
 }
 get photo() {
  return this.props.photo
 }
 get status() {
  return this.props.status
 }

 toJSON() {
  return {
   id: this.id,
   photo: this.photo,
   name: this.name,
   email: this.email,
   password: this.password,
   status: this.status
  }
 }
 
}