"use client"
import Image from "next/image";
import Bitmoji from "../../../public/assets/svg/bitmoji.png";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const paraContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(paraContainer.current, {
      scrollTrigger: {
        trigger: paraContainer.current,
        start: "start 70%",
        end: "bottom 150px",
        markers: true,
        scrub: 1,
        toggleActions: "restart pause reverse none"
      },
      duration: 2,
      color: "white",
      ease: "power1.out"
    })
  });


  return (
    <div id="GetToKnowMe!" className="w-[72.56rem] m-auto my-32" >
      <h2 className="text-7xl from-[#8E62BC] via-[#4A91E3] to-[#AB2574] bg-gradient-to-r bg-clip-text text-transparent">About me</h2>
      <div className="flex items-center h-52 border-y my-4 border-stone-800">
        <Image alt="" src={Bitmoji} height={200} width={200} />
        <p className="text-4xl">Click here to learn 5 fun facts about me!</p>
      </div>
      <p ref={paraContainer} className="text-3xl text-zinc-700">
        I am a Bay Area native, passionate about learning the mechanics of the
        objects that surround our daily lives. Curiosity is my main driver
        leading every decision I make. I fortunatley crossed paths with
        technology, and instantly fell in <span className="animate animate-pulse text-rose-600">love</span>. These Projects serve as a
        <span className="bg-gradient-to-r to-white to from-zinc-800 text-transparent bg-clip-text"> reflection</span> of my learning journey, and each are a stepping stone to my
        next learning venture.
      </p>
    </div>
  );
}
