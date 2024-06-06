"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


type ProjectProps = {
  cover: string;
  tech1: string;
  tech2: string;
  tech3: string;
  code: string;
  site: string;
  text: string;
};

export default function Project({
  cover,
  tech1,
  tech2,
  tech3,
  code,
  site,
  text
}: ProjectProps) {
  gsap.registerPlugin(ScrollTrigger)
  const animationRef = useRef<GSAPTween | null>(null);
  const githubContainer = useRef<HTMLDivElement>(null);
  const projectContainer = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    animationRef.current = gsap.to(projectContainer.current, {
      scrollTrigger: {
        trigger: projectContainer.current,
        start: "start 80%",
        end: "bottom 700px",
        scrub: 3,
        toggleActions: "restart pause reverse none"
      },
      y: -50,
      duration: 1,
      opacity: 1,
      ease: "power4.out",
    });
  });

  useGSAP(() => {
    animationRef.current = gsap.to(githubContainer.current, {
      rotate: 720,
      duration: 0.5,
      paused: true,
      ease: "power1.in",
      cursor: "pointer",
    });
  });

  const onMouseEnterHandler = () => {
    animationRef.current?.play();
  };

  const onMouseLeaveHandler = () => {
    animationRef.current?.reverse();
  };

  return (
    <div  className="mb-[14.93rem]">
      <div ref={projectContainer} className="lg:w-[28rem] lg:h-[28rem] h-[24rem] opacity-0  bg-gray-800 m-1 mb-10 rounded-3xl shadow-[0_0_35px_0_rgba(0,0,0,0.3)] shadow-[#2563EB] relative">
        <Link href={site} target="_blank">
            <Image
            alt="Project"
            src={cover}
            fill
            objectFit="cover"
            objectPosition="top"
            className="rounded-3xl"
            />
        </Link>
      </div>
      <div className="flex justify-between">
        <div>
          <li className="border rounded border-white inline m-1 py-1 px-2 text-sm">
            {tech1}
          </li>
          <li className="border rounded border-white inline m-1 py-1 px-2 text-sm">
            {tech2}
          </li>
          <li className="border rounded border-white inline m-1 py-1 px-2 text-sm">
            {tech3}
          </li>
        </div>
        <div
          ref={githubContainer}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >

          <Link href={code} target="_blank">
            <Image
              alt="Github"
              src="../../../../assets/svg/github.svg"
              width={30}
              height={30}
              className="inline"
            />
          </Link>
        </div>
      </div>
      <p className="w-80 text-lg mt-4">{text}</p>
    </div>
  );
}
