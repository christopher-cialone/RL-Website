// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import Link from 'next/link'
// import { Beaker } from 'lucide-react'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Rosalone Labs',
//   description: 'Innovative technical solutions for your business',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="flex flex-col min-h-screen">
//           <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//             <div className="container flex h-14 items-center">
//               <div className="mr-4 hidden md:flex">
//                 <Link className="mr-6 flex items-center space-x-2" href="/">
//                   <Beaker className="h-6 w-6" />
//                   <span className="hidden font-bold sm:inline-block">Rosalone Labs</span>
//                 </Link>
//                 <nav className="flex items-center space-x-6 text-sm font-medium">
//                   <Link href="/services">Services</Link>
//                   <Link href="/about">About</Link>
//                   <Link href="/contact">Contact</Link>
//                   <Link href="/blog">Blog</Link>
//                   <Link href="/education/blockchain">Blockchain</Link>
//                 </nav>
//               </div>
//             </div>
//           </header>
//           <main className="flex-1">
//             {children}
//           </main>
//           <footer className="w-full py-6 bg-gray-800 text-white">
//             <div className="container px-4 md:px-6">
//               <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//                 <div className="text-center md:text-left">
//                   <p>&copy; 2024 Rosalone Labs & Rosalone Industries. All rights reserved.</p>
//                 </div>
//                 <nav className="flex items-center space-x-4">
//                   <Link href="/privacy">Privacy Policy</Link>
//                   <Link href="/terms">Terms of Service</Link>
//                 </nav>
//               </div>
//             </div>
//           </footer>
//         </div>
//       </body>
//     </html>
//   )
// }


import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rosalone Labs",
  description: "Created by Rosalone Labs for Rosalone Industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
