import Image from "next/image"
import ContactBg from "../../../public/assets/contact-background-img.jpg"
import { ReactNode } from "react"


 type ContactProps = {
    children: ReactNode
}

export default function Contact ({children}: ContactProps) {
    return (
        <section className="relative h-[55rem]">
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