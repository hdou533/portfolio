
import Hero from './../components/Hero';
import Contact from './../components/Contact';
import Skills from './../components/Skills';
import Projects from './../components/Projects';

export default function Home() {
  return (
    <div className='bg-background w-full scroll-smooth snap-y'>
      <Hero />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  )
}
