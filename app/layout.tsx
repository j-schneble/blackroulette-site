import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
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
					"min-h-screen overflow-x-hidden mobile-flow bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
			
						<main className="container flex-grow max-w-4xl px-2 pt-8 mx-auto">
							{children}
						</main>
						
					</div>
				</Providers>
			</body>
		</html>
	);
}
