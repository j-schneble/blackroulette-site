import { Link } from "@nextui-org/link";
import React from "react";
import "tailwindcss/tailwind.css";
import Terminal from '../components/terminal'
import Image from 'next/image'
import { BiLogoVisualStudio } from "react-icons/bi";
import {CircularProgress} from "@nextui-org/react";
import { Button} from "@nextui-org/react";
import { title} from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
export default function Home() {
	return (
		<section className="flex flex-col gap-2 mt-8 px-2 ">
 
		  <div className='flex items-center  justify-center  pb-2 mobility'>
      <div className="flex items-center justify-center text-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-md rounded-lg shadow-small ml-1 z-10">
    
        <CircularProgress
            className="px-2"
            size="md"
            value={100}
            color="success"
//   formatOptions={{ style: "unit", unit: "kilometer" }}
            showValueLabel={true}
        />
        <Button 
            isExternal
            href="https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme"
            as={Link}
            className=" text-white bg-black/20" 
            variant="flat" color="default" radius="lg" size="sm"
        >
          <div className='flex justify-center max-w-full items-center text-center '>

            <h1 className='px-2 text-base font-medium text-zinc-200'>v0.0.1</h1>
            <h1 className=' border-l text-base  border-white/20 px-2  text-blue-500'>
            <BiLogoVisualStudio size={25} />
            </h1>
          
          </div>
        </Button>
      </div> 
      </div>

      <div className='flex justify-center py-2 mx-auto mt-4 text-center '>
<h1 className={title({ class: " title-mob font-thin  text-zinc-200" })}  >Black</h1>
	<h1 className={title({ class: " title-mob  font-medium  text-zinc-700 " })}  >Roulette</h1>
	</div>

  <div>

<div >
        <Terminal />
        </div>
      <div>
        <Image
           src={'/br-theme-new.png'}
           alt="Picture of the author"
           sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={500}
            height={300}
            className='border border-white/15 shadow-white/10 rounded-lg shadow-sm'
                    // quality={100}
                    // className="flex items-center justify-center p-4 mx-4 border rounded-lg shadow-2xl w-fit border-white/20 "
          />
      </div>				
    </div>   
    {/* <footer className="flex mt-8 items-center justify-center ">
							<Button 
								isExternal
      							href="https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme"
      							as={Link}
      							className='bg-black'     
      							variant="solid"
							>
								<div className='flex justify-center max-w-full text-center '>
 									<span className='flex items-center rounded-xl text-black bg-zinc-600'>
										<GithubIcon size={20} />
									</span>
								</div>
							</Button> 
						</footer>       */}
</section>
		
	);
}
