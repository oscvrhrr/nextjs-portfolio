import Image from "next/image"
import Bitmoji from "../../../public/assets/laptop-bitmoji.png"
import BtnRocket from "../../../public/assets/svg/btn-rocket.svg"

export default function ContactForm () {
    return (
        <div className="w-[68.25rem] h-[30rem] p-5 flex justify-between bg-gray-900 rounded-3xl shadow-[0_0_45px_0_rgba(0,0,0,0.3)] shadow-[#2563EB] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <form action="post" className="w-[31.825rem] h-[27.5rem] p-10" >
                <h3 className="text-3xl mb-8">Lets Connect</h3>
                <div className="">
                    <input className="inline rounded bg-[#FFFFFF0D] ml-1 pl-3 py-3 w-[12.975rem] border-[#FFFFFF33] border" type="text" placeholder="First Name"/>
                    <input className="inline rounded bg-[#FFFFFF0D] ml-2 pl-3 py-3 w-[12.999rem] border-[#FFFFFF33] border" type="text" placeholder="Last Name"/>
                    <input className="block rounded bg-[#FFFFFF0D] m-1 my-2 pl-3 py-3 w-[26.625rem] border-[#FFFFFF33] border" type="text" placeholder="Email"/>
                    <input className="block rounded bg-[#FFFFFF0D] m-1 my-2 pl-3 py-3 w-[26.625rem] h-[9.4rem] border-[#FFFFFF33] border" type="text" placeholder="Message" />
                    <button className="w-[26.625rem] h-[2.5rem] ml-1 bg-gradient-to-r from-[#763AF5] to to-[#A604F2]  rounded animate-pulse" type="submit">Send to the moon</button>
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