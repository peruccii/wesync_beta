import { Cloud } from "lucide-react";
import Section from "./section";

const ContextPageThird = () => {
  return (
    <section className="dark:bg-gray-900 relative overflow-hidden">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="flex mx-auto text-center mb-2 items-center">
            <h1 className="text-color-n-icons flex gap-1 scroll-m-20 text-2xl font-semibold tracking-tight" id="introducing">
              <Cloud color="#FF6363" className="ml-1"/> Cloud sync
            </h1>
          </div>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl text-white">
            Sync your music with your friends
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
        </div>
        <div className="relative lg:mt-0 lg:col-span-5 lg:flex">
        <div className="absolute inset-0 bg-red-500 bg-opacity-50 blur-[30px]" /> 
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default ContextPageThird;
