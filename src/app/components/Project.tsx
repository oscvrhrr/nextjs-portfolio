"use client"
import Image from "next/image"
import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"



type ProjectProps = {
    cover: string,
    tech1: string,
    tech2: string,
    tech3: string
}


export default function Project ({cover, tech1, tech2, tech3}: ProjectProps) {
    const animationRef = useRef<GSAPTween | null>(null);
    const githubContainer = useRef<HTMLDivElement>(null)

    useGSAP(() => {
       animationRef.current = gsap.to(githubContainer.current, {
            rotate: 720,
            duration: .5,
            paused: true,
            ease: "power1.in",
            cursor: "pointer"
        })
        
    });

    const onMouseEnterHandler = () => {
        animationRef.current?.play()
    }

    const onMouseLeaveHandler = () => {
        animationRef.current?.reverse()
    }


    return (
        <div className="mb-[14.93rem]">
            <div className="h-[28rem] w-[28rem] bg-gray-800 m-1 mb-10 rounded-3xl shadow-[0_0_35px_0_rgba(0,0,0,0.3)] shadow-[#2563EB] relative">
                <Image 
                    alt="Project"
                    src={cover}
                    fill
                    objectFit="cover"
                    objectPosition="top"
                    className="rounded-3xl"

                    
                />
            </div>
            <div className="flex justify-between">
                <div>
                    <li className="border rounded border-white inline m-1 py-1 px-2 text-sm">{tech1}</li>
                    <li className="border rounded border-white inline m-1 py-1 px-2 text-sm">{tech2}</li>
                    <li className="border rounded border-white inline m-1 py-1 px-2 text-sm">{tech3}</li>
                </div>
                <div  ref={githubContainer} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} >
                    <Image
                        alt="Github"
                        src="../../../../assets/svg/github.svg"
                        width={30}
                        height={30}
                        className="inline"
                       
                    />
                </div>
            </div>
            
        </div>
    )
};