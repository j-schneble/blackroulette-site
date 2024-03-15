import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/br2.png",
		shortcut: "/br2.png",
		apple: "/br2.png",
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
				"min-h-screen mobile-flow bg-background font-sans antialiased",
				fontSans.variable
			)}
		>
			<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
				<div className="relative flex flex-col h-screen">
					{/* <Navbar /> */}
					<main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
						{children}
					</main>
					<footer className="flex items-center justify-center w-full py-3">
						<Link
							isExternal
							className="flex items-center gap-1 text-current"
							href="https://github.com/j-schneble/blackroulette"
							title="blackroulette source"
						>
						
							<p className="text-zinc-700">BlackRoulette</p>
						</Link>
					</footer>
				</div>
			</Providers>
		</body>
	</html>
	);
}
