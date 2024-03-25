import { Music } from "@/app/@core/domain/entities/music"


type MusicListProps = {
 music: Music[]
}

export default function ProductsList({music}: MusicListProps ){
 console.log(music)
 return (
  
  <div className="bg-red-700">
   {music?.map((music) => (
    <div key={music.id}>
     <h2>{music.name}</h2>
    </div>
   ))}
  </div>
 )
}