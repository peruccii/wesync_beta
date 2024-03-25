export type MusicProps =  {
 id?: number;
 photo?: string;
 name: string;
 status: {id: number, name: string};
 created_at: string;
 updated_at: string;
}

export class Music {
 toJSON() {
  return {
   id: this.id,
   photo: this.photo,
   name: this.name,
   status: this.status,
   created_at: this.created_at,
   updated_at: this.updated_at,
  }
 }
 constructor(public props: MusicProps){}

 get id() {
  return this.props.id
 }
 get photo() {
  return this.props.id
 }
 get name() {
  return this.props.id
 }
 get status() {
  return this.props.id
 }
 get created_at() {
  return this.props.id
 }
 get updated_at() {
  return this.props.id
 }
}