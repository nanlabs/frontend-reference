import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Music Licensing App",
	description: "manage music licensing",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<div className="grid grid-rows-[auto_1fr_auto] h-dvh">
					<Navbar />
					<main className="p-6">{children}</main>
					<footer className="text-xs text-center p-2 mt-6">
						<p>© {new Date().getFullYear()} ACME BROS PICTURES</p>
					</footer>
				</div>
			</body>
		</html>
	);
}
