import About from "@/components/About";
import BlurBackground from "@/components/BlurBackground";
import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    (<>
      <BlurBackground />
      <NavBar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <NavBar />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Testimonial />
        <Contacts />
      </main>
    </>)
  );
}
