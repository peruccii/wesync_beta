import { Container } from "inversify";
import { MusicHttpGateway } from "../../gateways/music-http.gateway";
import { http } from "@/utils/http";

export const Registry = {
 AxiosAdapter: Symbol.for("AxiosAdapter"),
 MusicGateway: Symbol.for("MusicGateway"),
 ListMusicUseCase: Symbol.for("ListMusicUseCase"),
}

export const container = new Container()

container.bind(Registry.AxiosAdapter).toConstantValue(http);
container.bind(Registry.MusicGateway).toDynamicValue((context)=> {
    return new MusicHttpGateway(context.container.get(Registry.AxiosAdapter))
});