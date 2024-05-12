import { Nanum_Brush_Script } from "next/font/google"
import Image from "next/image"
import Navbar from "./Navbar"
import HeroBackground from "../../../public/assets/hero-background.png"
import Rocket from "../../../public/assets/svg/rocket.png"

export default function Hero () {

    return (
        <section> 
            <Navbar/>
            <Image 
                alt="Outer space"
                src={HeroBackground}
                quality={100}
                className="relative"
            />

            <div className="absolute top-[17rem] left-32 w-[34rem]">
                <h1 className="text-7xl bg-gradient-to-r from-white to to-zinc-500 text-transparent bg-clip-text">Hey!<br/> My name is Oscar Herrera</h1>
                <p className="bg-gradient-to-r from-white to to-zinc-500 text-transparent bg-clip-text text-md">
                    Welcome to my little corner in the web! 
                    I am passionate aboue learning new tech, and
                    paving beautiful user experiences through out the 
                    internet
                </p>
            </div>

            <div>
                <Image 
                    alt="Oscar"
                    src={Rocket}
                    width={350}
                    height={350}
                    quality={100}
                    className="absolute top-[14rem] right-[20rem]"
                />
            </div>
        </section>
    
    )
};