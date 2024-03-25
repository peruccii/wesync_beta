import { AxiosInstance } from "axios";
import { Music, MusicProps } from "../../domain/entities/music";
import { MusicGateway } from "../../domain/gateways/music.gateway";

export class MusicHttpGateway implements MusicGateway {
 constructor(private http: AxiosInstance){}

 async find_all(page?: number): Promise<Music[]> {
  return this.http.get<{items: MusicProps; data: { items: Music[] }}>('').then((res) => {
   if (Array.isArray(res.data.items)) {
    return res.data.items.map(
      (data: MusicProps) =>
        new Music({
          ...data
        })
    );
  } else {
    console.error("Unexpected response format:", res.data);
    return [];
  }
  })
 }
}