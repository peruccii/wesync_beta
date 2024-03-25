import { Music } from "../../domain/entities/music";
import { MusicGateway } from "../../domain/gateways/music.gateway";

export class ListMusicsUseCase {
 constructor(private musicGateway: MusicGateway){}
 async execute(page?: number): Promise<Music[]> {
  return this.musicGateway.find_all(page)
 }
}