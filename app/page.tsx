import { Link } from "@nextui-org/link";
import React from "react";
import "tailwindcss/tailwind.css";
import Image from 'next/image'
import { BiLogoVisualStudio } from "react-icons/bi";
import { Button} from "@nextui-org/react";
import { title} from "@/components/primitives";
import { Particles } from "../components/particles";
import Colors from '../components/colors'


export default function Home() {
	return (
		<section className="flex flex-col gap-2 px-2 mt-8 ">
      <div className='px-2 py-4 '>
        <div className='flex text-left '>
          <div className='flex mt-4 mb-3 justify-evenly'>
              
            <h1 className={title({ class: " title-mob font-thin  text-zinc-200" })}>
              Black
            </h1>
            <h1 className={title({ class: " title-mob  font-medium  text-zinc-700 " })}>
              Roulette
            </h1>
            
          </div>
        </div>

          <div className="flex flex-col text-left justify-evenly ">	

            <h2 className='text-lg text-white' >
              A minimal, dark extension for VS code.
				    </h2>
				    <h2 className='text-lg text-white' >
              v0.0.2 coming soon for iTerm2 + Sublime.
				    </h2>		
        
          </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-6 mb-3'>
          <Button 
                isExternal
                href="https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme"
                as={Link}
                className="text-center text-white bg-black border border-white/20" 
                variant="flat" color="default" radius="lg" size="sm"
            >
          <div className='flex items-center justify-center max-w-full p-2 text-center '>

            <h1 className='px-2 text-xl font-medium text-center text-zinc-200'>
              → v0.0.1
            </h1>
            <h1 className='px-2 text-lg text-blue-500 border-l border-white/20'>
            <BiLogoVisualStudio size={28} />
            </h1>
          
          </div>
          </Button>
       </div>
  
    
        <Colors/>
        
           <div className="relative isolate">
            <Particles
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-50 -z-10 group-hover/item:opacity-100"
              quantity={(0 + 1) ** 10 * 30}
              color={"#dff3fa"}
              vy={-0.2}
            />
              <div
                  aria-hidden="true"
                  className="absolute inset-x-0 overflow-hidden pointer-events-none -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
              >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  sm:left-[calc(50%-20rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>

          <div>
            <div className="flex justify-center max-w-6xl px-6 mx-auto lg:px-8">
              <div className="flow-root mt-8 sm:mt-16">
                <div className="p-2 -m-2 w-fit rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src={'/br-theme-new.png'}
                    alt="product preview"
                    width={955}
                    height={808}
                    quality={100}
                    className="p-2 rounded-md saturate-150 contrast-100 md:p-8"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 overflow-hidden pointer-events-none -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative right-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#918c95] to-[#736c73] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem] sm:translate-y-8"
            />
          </div>
        </div>
</section>
		
	);
}
