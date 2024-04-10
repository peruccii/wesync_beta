import logo from '@/assets/logo_wesync.png'

export default function Loading(){
 return (
     <div className="bg-color-n-principal w-full h-[59.8rem]">
       <div className="text-center flex flex-col justify-center h-full  w-full items-center">
         <div className="animate-bounce">
           <img src={logo.src} alt="logo_wesync" />
         </div>
       </div>
     </div>
   );
 }