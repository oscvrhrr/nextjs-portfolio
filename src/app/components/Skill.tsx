import Image from "next/image"


type skillsProps = {
    path: string,
    text: string
}

export default function Skill ({ path, text }: skillsProps) {
        return (
            <div className="flex flex-col items-center">
                <Image
                    alt="Tech skill"
                    src={path}
                    width={65}
                    height={65}
                />
                <p className="pt-1">{text}</p>
            </div>
        )

};