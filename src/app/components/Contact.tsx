import Image from "next/image"
import ContactBg from "../../../public/assets/contact-background-img.jpg"



export default function Contact ({children}) {
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