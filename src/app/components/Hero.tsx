import { Nanum_Brush_Script } from "next/font/google"
import Image from "next/image"
import Navbar from "./Navbar"


export default function Hero () {

    return (
        <section> 
            <Navbar/>
            <Image
                src="/assets/hero-image.png"
                alt="hero image"
                width={1920}
                height={400}
                priority={true}
                quality={100}
            />
        </section>
    )





};