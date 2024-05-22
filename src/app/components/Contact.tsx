import Image from "next/image"
import ContactBg from "../../../public/assets/contact-background-img.jpg"


export default function Contact () {
    return (
        <section>
            <Image
                alt="Outer Space"
                src={ContactBg}
                width={1430}
                quality={100}
            />
        </section>
    )
}