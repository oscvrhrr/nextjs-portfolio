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

            <div className="absolute top-[16rem] left-28 w-[45rem]">
                <h1 className=" text-8xl bg-gradient-to-r to-[#ffffff] from-10% via-50% to-99% via-[#4A91E3] from-[#8E62BC] text-transparent bg-clip-text font-bold drop-shadow-[1px_1px_4px_rgba(0,0,0,1)]">Hey!<br/> My name is Oscar Herrera</h1>
                <p className="text-white  text-lg">
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
                    width={250}
                    height={250}
                    quality={100}
                    className="absolute top-[10rem] right-[21rem]  "
                    priority
                />
            </div>
        </section>
    
    )
};