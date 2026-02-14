// import Image from 'next/image'
import Intro from "@/components/intro"
import About from '@/components/about'
import SectionDivider from '@/components/section-divider'
import Skills from '@/components/skills'
import Projects from "@/components/projects"
import Experience from "@/components/experiance"



export default function Home() {
  return (
    <main className='flex flex-col items-center px-4' >
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Projects />

    </main>
  )
}
