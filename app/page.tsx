import { Link } from "@nextui-org/link";
import { title} from "@/components/primitives";
import React from "react";
import "tailwindcss/tailwind.css";
import Terminal from '../components/terminal'
import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import {  Button } from "@nextui-org/react";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function Home() {
	return (
		<section className="flex flex-col gap-4 py-4">
		
		<div className='flex items-center justify-center pb-2 mobility'>
<Button isExternal
      href="https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme"
      as={Link}
      className='p-6 ml-2 text-2xl border-2 rounded-lg border-zinc-700/30 font bg-zinc-900/30'
      
      variant="solid"
    >
		<div className='flex justify-center max-w-full text-center '>
		<h1 className='px-2 font-medium text-zinc-200'>v0.0.1</h1>

 <span className='flex items-center px-2 text-2xl text-blue-500'><BiLogoVisualStudio />  </span></div>
    </Button> 
</div>
	
<div className='flex justify-center py-2 mx-auto mt-4 mb-2 text-center '>
<h1 className={title({ class: " font-thin  text-zinc-200" })}  >Black</h1>
	<h1 className={title({ class: "   font-medium  text-zinc-700 " })}  >Roulette</h1>
	</div>

			<div className="flex justify-center max-w-6xl mx-auto mb-8 ">
				
              <div className="flow-root ">
	
                <div className="p-2 -m-2 w-fit rounded-xl bg-zinc-900/5 lg:-m-4 lg:rounded-2xl ">
			
				<Terminal />
                  <Image
                     src="/br-theme-new.png"
                    alt="product preview"
                    width={955}
                    height={808}
					as={NextImage}
                    // quality={100}
                    className="border rounded-lg shadow-2xl border-white/20 "
                  />
                </div>
				
              </div>
            </div>
			 

							
          
</section>
		
	);
}
