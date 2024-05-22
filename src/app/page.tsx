import Image from "next/image";
import Hero from "./components/Hero";
import Techstack from "./components/Techstack";
import About from "./components/About";
import ProjectHub from "./components/ProjectHub";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero/>
      <Techstack/>
      <About/>
      <ProjectHub/>
      <Contact>
        <ContactForm/>
      </Contact>
   </>

  );
}
