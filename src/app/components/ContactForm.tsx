import Image from "next/image"
import Bitmoji from "../../../public/assets/laptop-bitmoji.png"


export default function ContactForm () {
    return (
        <div className="w-[68.25rem] h-[30rem] p-5 flex justify-between bg-gray-900 rounded-3xl shadow-[0_0_45px_0_rgba(0,0,0,0.3)] shadow-[#2563EB] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <form action="post" className="w-[31.625rem] h-[27.5rem]" >
                <h3 className="text-3xl mb-24">Lets Connect</h3>
                <div className="">
                    <input className="inline rounded bg-[#FFFFFF0D] mx-1 pl-3 py-3 w-[12.975rem]" type="text" placeholder="First Name"/>
                    <input className="inline rounded bg-[#FFFFFF0D] ml-1  pl-3 py-3 w-[12.975rem]" type="text" placeholder="Last Name"/>
                    <input className="block rounded bg-[#FFFFFF0D] m-1 pl-3 py-3 w-[26.625rem]" type="text" placeholder="Email"/>
                    <input className="block rounded bg-[#FFFFFF0D] m-1 pl-3 py-3 w-[26.625rem] h-[9.4rem]" type="text" placeholder="Message" />
                    <button type="submit"></button>
                </div>
            </form>
            <div className="w-[31.625rem] h-[25.5rem]">
                <Image 
                    alt="Bitmoji"
                    src={Bitmoji}
                    height={440}
                    width={440}
                />
            </div>
        </div>
    )
}