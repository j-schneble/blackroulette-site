import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { title, subtitle } from "@/components/primitives";
import {Image} from "@nextui-org/react";
import { BiLogoVisualStudio } from "react-icons/bi";
import { Button} from "@nextui-org/react";
import Colors from '../components/colors';

export default function Home() {
	return (
		<section className="flex flex-col gap-4 ">
              

			<div className="flex flex-col justify-center ">
	  
				<div className="justify-center inline-block max-w-lg text-left">
				<h1 className={title({ class: "font-extralight "})}>Black&nbsp;</h1>
				<h1 className={title({ color: "gray" })}>Roulette&nbsp;</h1>
				<br />			
				<h2 className={subtitle({ class: "mt-2" })}>
				A minimal, dark extension for VS code. <span className='flex'> v0.0.2 coming soon for iTerm2 + Sublime.</span>
				</h2>
    
				<div className='justify-center inline-block max-w-lg mt-2 text-left'>
     
					<Link className='flex items-center justify-center text-left '>
						<Button 
                			isExternal
                			href="https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme"
                			as={Link}
                			className="text-center text-white bg-green-500 border border-green-500 rounded-md"             
            			>
          		<div className='flex items-center justify-center max-w-full p-2 text-center '>

           			 <h1 className='p-4 px-2 text-xl font-medium text-center text-white'>
			   		v.0.0.1
            		</h1>
           			 <h1 className='px-2 text-lg text-white border-l border-white/20'>
					<BiLogoVisualStudio size={28} /> 
            		</h1>
          		</div>
          				</Button>	
					</Link>
				</div>
			</div>
		</div>
		<div className='flex flex-col items-center justify-center mt-6 '>
			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
				<Image
     			 width={800}
      			 alt="NextUI hero Image"
      			 src="/br-theme-new.png"
   				/>
				</Snippet>
			</div>
			<div className='flex items-center justify-center mt-6 text-center'>
				<Colors/>
			</div>
		</div>
	</section>
	);
}
