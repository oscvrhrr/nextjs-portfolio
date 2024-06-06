import Image from "next/image";
import Bitmoji from "../../../public/assets/laptop-bitmoji.png";
import BtnRocket from "../../../public/assets/svg/btn-rocket.svg";

export default function ContactForm() {
  return (
    <div className="lg:w-[68.25rem] lg:h-[30rem] md:flex-row md:h-[31rem] md:pb-4 h-[45rem] w-11/12 border-box flex flex-col justify-between items-center bg-gray-900 rounded-3xl shadow-[0_0_45px_0_rgba(0,0,0,0.3)] shadow-[#2563EB] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <form action="post" className="md:pl-8 md:p-0 h-[25.5rem] w-[90%] p-10">
        <h3 className="text-3xl mb-4">Lets Connect</h3>
        <div className="">
          <input
            className="inline rounded bg-[#FFFFFF0D] ml-1 my-1 pl-3 py-3 w-full  border-[#FFFFFF33] border"
            type="text"
            placeholder="First Name"
          />
          <input
            className="inline rounded bg-[#FFFFFF0D] ml-1 mt-1 pl-3 py-3 w-full  border-[#FFFFFF33] border"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="block rounded bg-[#FFFFFF0D] m-1 my-2 pl-3 py-3 w-full  border-[#FFFFFF33] border"
            type="text"
            placeholder="Email"
          />
          <input
            className="block rounded bg-[#FFFFFF0D] m-1 my-2 pl-3 py-3  w-full h-[9.4rem] border-[#FFFFFF33] border"
            type="text"
            placeholder="Message"
          />
          <button
            className=" w-full h-[2.5rem] ml-1 bg-gradient-to-r from-[#763AF5] to to-[#A604F2]  rounded animate-pulse"
            type="submit"
          >
            Send to the moon
          </button>
        </div>
      </form>
      <div className="lg:h-full lg:p-0 md:w-full w-[85%] h-[22.5rem] p-10">
        <Image alt="Bitmoji" src={Bitmoji} height={440} width={440} />
      </div>
    </div>
  );
}
