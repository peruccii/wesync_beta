import { Button } from "@/components/ui/button"
import ctxBackground from '../../../assets/background.png'
import Section from "./section"
import Notification from "./notification"
import { useLayoutEffect, useRef } from "react"
import gsap from 'gsap'
import { ScrollParallax } from "react-just-parallax"
import { BackgroundCircles, BottomLine } from "@/components/design/Hero"
import { heroIcons } from "@/constants"
import { heroBackground } from "@/assets"

const ContextPageOne = () => {
 const parallaxRef = useRef(null);
 const comp = useRef(null)
 useLayoutEffect(() => {
  let ctx = gsap.context(() => {
   const t1 = gsap.timeline()
   t1.from(["#introducing", "#title-1", "#title-2", "#title-3", "#button-get-started" ], {
    opacity: 0,
    y: "+=40",
    stagger: 0.6,
    delay: 0.6
   })
  }, comp)
  return () => ctx.revert()
 }, [])

 return (
  <Section className='pt-[12rem] mt-[5.25]'
   crosses
   crossesOffset='lg:translate-y-[5.25rem]'
   customPaddings
   id='ContextPageOne'
  ><div className="container relative" ref={comp}>
   <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
    <div className="">
     <small className="bg-[#A42F52] p-2 rounded-full w-12 text-white pl-5 border border-border pr-5" id="introducing">Introducing to Wesync</small>
    </div>
    <h1 className="h1 mb-6 mt-3" id="title-1">
     A new way to listen musics with
     <span className="inline-block relative text-color-n-14" id="title-2">Wesync</span>
    </h1>
    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8" id="title-3">Unleash the power of AI withibn Wesync.
     Upgrade your productiviu
    </p>
    <Button variant='default' size='getstarted' id="button-get-started">
     Get started
    </Button>
   </div>

   <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
         
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[13/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
               

           
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Creators"
                  />
                </ScrollParallax>
              </div>
            </div>

          
        
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground.src}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
                    
          <BackgroundCircles />
        </div>

      

  </div>
  </Section>
 )
}

export default ContextPageOne