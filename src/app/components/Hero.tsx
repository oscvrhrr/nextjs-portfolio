import { Nanum_Brush_Script } from "next/font/google"
import Image from "next/image"
import Navbar from "./Navbar"
import HeroBackground from "../../../public/assets/mountain-50.png"
import Rocket from "../../../public/assets/svg/rocket.png"

export default function Hero () {

    return (
        <section> 
            <Navbar/>
            <Image 
                alt="Outer space"
                src={HeroBackground}
                width={1423}
                quality={100}
                className="relative"
            
            />

            <div className="absolute top-[17rem] left-28 w-[34rem]">
                <h1 className="text-7xl bg-gradient-to-r from-zinc-200 to to-blue-900 text-transparent bg-clip-text font-medium">Hey!<br/> My name is Oscar Herrera</h1>
                <p className="text-white text-md">
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
                    width={275}
                    height={275}
                    quality={100}
                    className="absolute top-[16rem] right-[21rem]"
                    priority
                />
            </div>
        </section>
    
    )
};