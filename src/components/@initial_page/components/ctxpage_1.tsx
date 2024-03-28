import { Button } from "@/components/ui/button"
import Section from "./section"
import { useLayoutEffect, useRef } from "react"
import gsap from 'gsap'
import { BackgroundCircles } from "@/components/design/Hero"
import { heroBackground } from "@/assets"
import { ChevronDown } from "lucide-react"

const ContextPageOne = () => {
  const parallaxRef = useRef(null);
  const comp = useRef(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from(["#introducing", "#title-1", "#title-2", "#title-3", "#button-get-started"], {
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
          <h1 className="h1 text-background mb-6 mt-3" id="title-1">
            A new way to listen musics with
            <span className="inline-block relative text-color-n-14" id="title-2">Wesync</span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-color-n-2 lg:mb-8" id="title-3">Unleash the power of AI withibn Wesync.
            Upgrade your productiviu
          </p>
          <div className="flex flex-col gap-2  mx-auto items-center">
            <Button variant='default' size='getstarted' id="button-get-started">
              Get started
            </Button>
            <div>
              <button className="mt-14 relative inline-flex overflow-hidden rounded-full p-px">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-3 py-3 text-sm font-medium text-gray-50 backdrop-blur-3xl">
                  <ChevronDown size={16} />
                </span>
              </button>
            </div>

          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-2">
          <div className="relative bg-color-n-8 rounded-[1rem]">
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
            <div className=" lg:aspect-[1024/490]">
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