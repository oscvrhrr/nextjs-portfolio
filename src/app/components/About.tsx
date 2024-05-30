"use client"
import Image from "next/image";
import Bitmoji from "../../../public/assets/svg/bitmoji.png";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react"


export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const paraContainer = useRef<HTMLDivElement>(null);
  const [string, setString ] = useState(["Click here to learn 4 fun facts about me!"]);

  const handleClick = () => {
    if(string[0] == "Click here to learn 4 fun facts about me!") {
      setString(string.map(i  => "My favorite ice cream is Ben and Jerry's Milk & Cookies!"))
    } else if (string[0] == "My favorite ice cream is Ben and Jerry's Milk & Cookies!") {
      setString(string.map(i => "My high school friend introduced me to world of programming! " ))
    } else if (string[0] == "My high school friend introduced me to world of programming! ") {
      setString(string.map(i => "Im currently learning Node.js!"))
    } else if (string[0] == "Im currently learning Node.js!") {
      setString(string.map(i => "My longest roadtrip has been from San Francisco to Chicago!"))
    } else {
      setString(string.map(i => "Click here to learn 4 fun facts about me!"))
    }
  }



  useGSAP(() => {
    gsap.to(paraContainer.current, {
      scrollTrigger: {
        trigger: paraContainer.current,
        start: "start 70%",
        end: "bottom 150px",
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
        <p className="text-4xl cursor-pointer" onClick={handleClick}>{string}</p>
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
