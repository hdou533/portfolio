import Hero from "@/components/layout/Hero";
import Contact from "@/components/layout/Contact";
import Projects from "@/components/layout/Projects";
import AboutMe from "@/components/layout/AboutMe";
import Experience from "@/components/layout/Experience";

export default function Home() {
  return (
    <div className="bg-background w-full scroll-smooth snap-y">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
