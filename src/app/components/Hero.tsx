import { Nanum_Brush_Script } from "next/font/google"
import Image from "next/image"
import HeroBackground from "../../../public/assets/mountain-50.jpeg"
import Rocket from "../../../public/assets/svg/rocket.png"

export default function Hero () {

    return (
        <section className="h-[50rem] relative"> 
            
            <Image 
                alt="Outer space"
                src={HeroBackground}
                quality={90}
                className="relative"
                placeholder="blur"
                fill={true}
                sizes="100vw"
                priority

            />

            <div className="absolute top-[17rem] left-28 w-[34rem]">
                <h1 className="text-7xl font-bold drop-shadow-[1px_1px_10px_rgba(0,0,0,1)] text-white">Hey!<br/> My name is Oscar Herrera</h1>
                <p className="text-white  text-md">
                    Welcome to my little corner in the web! 
                    I am passionate about learning new tech, and
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