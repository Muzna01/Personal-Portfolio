import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Muzna's Portfolio",
  description: 'My Personal Web Portfolio',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
 <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[3000px] pt-28 sm:pt-36 `}
      >
        <div className="absolute top-[-6rem] -z-10 right-[4rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#d2935b]"></div>
        <div className="absolute top-[-1rem] -z-10 left-[12rem] h-[31.25rem] w-[30rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#88edcb]"></div>

<Header/>

{children}
<Footer/>

</body>
    </html>
  )
}
