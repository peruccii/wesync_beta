'use client'
import { ListMusicsUseCase } from "@/app/@core/application/music/list-musics.use-case";
import { Music } from "@/app/@core/domain/entities/music";
import { MusicGateway } from "@/app/@core/domain/gateways/music.gateway";
import { Registry, container } from "@/app/@core/infra/container-registry";
import { useQuery } from "@tanstack/react-query";

const fetchMusics = async () => {
 const musicGateway = container.get(Registry.MusicGateway) as MusicGateway;
 return useQuery<Music[]>({
  queryKey: ["music"],
  queryFn: async () => {
   const musics = await new ListMusicsUseCase(musicGateway).execute();
   return musics ;
  },
  refetchOnWindowFocus: false,
});
}

export default fetchMusics 