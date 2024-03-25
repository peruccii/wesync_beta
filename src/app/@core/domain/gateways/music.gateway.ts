import { Music } from "../entities/music";

export interface MusicGateway {
 find_all(page?: number): Promise<Music[]>;
}