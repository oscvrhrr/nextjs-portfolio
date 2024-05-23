import Image from "next/image";
import Bitmoji from "../../../public/assets/svg/bitmoji.png";


export default function About() {

  return (
    <div id="GetToKnowMe!" className="w-[72.56rem] m-auto my-32" >
      <h2 className="text-7xl from-[#8E62BC] via-[#4A91E3] to-[#AB2574] bg-gradient-to-r bg-clip-text text-transparent">About me</h2>
      <div className="flex items-center h-52 border-y my-4 border-stone-700">
        <Image alt="" src={Bitmoji} height={200} width={200} />
        <p className="text-4xl">Click here to learn 5 fun facts about me!</p>
      </div>
      <p className="text-3xl">
        I am a Bay Area native, passionate about learning the mechanics of the
        objects that surround our daily lives. Curiosity is my main driver
        leading every decision I make. I fortunatley crossed paths with
        technology, and instantly fell in love. These Projects serve as a
        reflection of my learning journey, and each are a stepping stone to my
        next learning venture.
      </p>
    </div>
  );
}
