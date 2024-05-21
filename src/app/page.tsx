import Image from "next/image";
import Hero from "./components/Hero";
import Techstack from "./components/Techstack";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Hero/>
      <Techstack/>
      <About/>
    </>

  );
}
