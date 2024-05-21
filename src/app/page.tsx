import Image from "next/image";
import Hero from "./components/Hero";
import Techstack from "./components/Techstack";
import About from "./components/About";
import ProjectHub from "./components/ProjectHub";



export default function Home() {
  return (
    <>
      <Hero/>
      <Techstack/>
      <About/>
      <ProjectHub/>
    </>

  );
}
