"use client";
import Image from "next/image";
import HeroBackground from "../../../public/assets/mountain-50.jpeg";
import Rocket from "../../../public/assets/svg/rocket.png";

export default function Hero() {
  return (
    <section id="Home" className="h-[50rem] w-screen relative">
      <Image
        alt="Outer space"
        src={HeroBackground}
        quality={100}
        className="object-cover lg:object-fill"
        placeholder="blur"
        fill={true}
        sizes="100vw"
        priority
      />

      <div className="lg:w-[45rem] lg:px-0 lg:left-28 lg:top-[16rem] top-56 absolute text-start px-6 md:w-[40rem] ">
        <h1 className="lg:text-8xl md:text-7xl text-6xl  bg-gradient-to-r  to-[#ffffff] from-10% via-50% to-99% via-[#4A91E3] from-[#8E62BC] text-transparent bg-clip-text font-bold drop-shadow-[1px_1px_4px_rgba(0,0,0,1)]">
          Hey!
          <br/> My name is Oscar Herrera
        </h1>
        <p className="text-white mt-10 lg:mt-0 lg:text-lg ">
          Welcome to my little corner in the web! I am passionate about learning
          new tech, and paving beautiful user experiences through out the
          internet
        </p>
      </div>

      <div>
        <Image
          alt="Oscar"
          src={Rocket}
          width={100}
          height={100}
          quality={100}
          className="none  "
          priority
        />
      </div>
    </section>
  );
}
