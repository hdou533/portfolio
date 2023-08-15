import Image from 'next/image'
import Hero from './../components/Hero';
import ContactForm from './../components/ContactForm';
import Skills from './../components/Skills';
import Projects from './../components/Projects';

export default function Home() {
  return (
    <div className='bg-color-bg w-full'>
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
    </div>
  )
}
