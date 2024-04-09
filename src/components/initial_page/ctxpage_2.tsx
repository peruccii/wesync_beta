import Section from "./section";
import Notification from "./notification";
import { Zap } from "lucide-react";
import { Gradient } from "@/components/design/Hero";
import { ScrollParallax } from "react-just-parallax";
import gif from "@/assets/gif.gif";
import { heroIcons } from "@/constants";

const ContextPageSecond = () => {
  return (
    <Section>
      <div className="container relative z-2">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <div className="flex mx-auto text-center items-center justify-center">
            <h1 className="text-[#FF6363] flex gap-1 scroll-m-20 text-2xl font-semibold tracking-tight items-center" id="introducing">
              Simple and Fast<Zap size={20} color="#FF6363" />
            </h1>
          </div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 text-color-n-1 mt-3" id="title-1">
            Create your songs with just one URL
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-color-n-2 lg:mb-8" id="title-3">
            text text texttext text texttext text texttext text texttext text text text text texttext text texttext text text
          </p>
        </div>
      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          <div className="relative rounded-[1rem]">
            <div className="h-[1.4rem] bg-color-n-10 rounded-t-[0.9rem]" />
            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <div className="absolute inset-0 bg-red-500 bg-opacity-50 blur-[100px]" /> 
              <img
                src={gif.src}
                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                width={1024}
                height={490}
              />
              <ScrollParallax isAbsolutelyPositioned>
                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-color-n-9/40 backdrop-blur border border-color-n-1/10 rounded-2xl xl:flex">
                  {heroIcons.map((icon, index) => (
                    <li className="p-5" key={index}>
                      <img src={icon} width={24} height={25} alt={icon} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>
              <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="hidden absolute text-color-n-1 -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                  title="Creators"
                />
              </ScrollParallax>
            </div>
          </div>
          <Gradient />
        </div>
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          <img
            className="w-full"
            width={1440}
            height={1800}
            alt="hero"
          />
        </div>
      </div>
    </Section>
  );
};

export default ContextPageSecond;
