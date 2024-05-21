import Image from "next/image"

type ProjectProps = {
    cover: string,
    tech1: string,
    tech2: string,
    tech3: string
}


export default function Project ({cover, tech1, tech2, tech3}: ProjectProps) {
    return (
        <div className="mb-[14.93rem]">
            <div className="h-[28rem] w-[28rem] bg-gray-800 m-1 mb-10 rounded-3xl shadow-[0_0_35px_0_rgba(0,0,0,0.3)] shadow-[#2563EB] relative">
                <Image 
                    alt="Project"
                    src={cover}
                    fill
                    objectFit="cover"
                    className="rounded-3xl"

                    
                />
            </div>
            <div className="border rounded border-white inline m-1 py-1 px-2 text-sm">{tech1}</div>
            <div className="border rounded border-white inline m-1 py-1 px-2 text-sm">{tech2}</div>
            <div className="border rounded border-white inline m-1 py-1 px-2 text-sm">{tech3}</div>
        </div>
    )
};