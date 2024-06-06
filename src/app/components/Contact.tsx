import Image from "next/image"
import ContactBg from "../../../public/assets/contact-background-img.jpg"
import { ReactNode } from "react"


 type ContactProps = {
    children: ReactNode
}

export default function Contact ({children}: ContactProps) {
    return (
        <section className="relative h-[60rem]">
            <h2 id="LetsMeet!" className="lg:pl-32 lg:text-7xl absolute bg-gradient-to-r from-[#8E62BC] via-[#4A91E3] to-[#AB2574] bg-clip-text text-transparent text-5xl w-[100%] pl-4  z-10">Contact</h2>
            <Image
                alt="Outer Space"
                src={ContactBg}
                quality={100}
                fill={true}
            />
            {children}
        </section>
    )
}