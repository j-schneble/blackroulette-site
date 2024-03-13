import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { GithubIcon } from "@/components/icons";
import {  Button } from "@nextui-org/react";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
			
						<main className="container flex-grow px-6 pt-8 mx-auto max-w-6xl">
							{children}
						</main>
						<footer className="flex items-center justify-center ">
							<Button 
								isExternal
      							href="https://marketplace.visualstudio.com/items?itemName=j-schneble.blackroulette-theme"
      							as={Link}
      							className='bg-black'     
      							variant="solid"
							>
								<div className='flex justify-center max-w-full text-center '>
 									<span className='flex items-center rounded-xl text-black bg-white'>
										<GithubIcon size={25} />
									</span>
								</div>
							</Button> 
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
