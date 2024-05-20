import Skill from "./Skill"





const paths = {
    react: '../../../../assets/svg/react.svg',
    javascript: '../../../../assets/svg/javascript.svg',
    typescript: '../../../../assets/svg/typescript.svg',
    tailwind: '../../../../assets/svg/tailwind.svg',
    sass: '../../../../assets/svg/sass.svg',
    css: '../../../../assets/svg/css.svg',
    html: '../../../../assets/svg/html.svg'


}


export default function Techstack () {
    return (
        <div className="w-[72.56rem] h-[18.75rem] bg-zinc-900 m-auto my-[5rem] mb-10 rounded-2xl shadow-[0_0_45px_0_rgba(0,0,0,0.3)] shadow-[#2563EB]">
            <h2 className="text-center text-2xl pt-5">Technologies</h2>
            <div className="text-white flex justify-around w-[51rem] h-[13.9rem] items-center m-auto">
                <Skill path={paths.react} text="React"/>
                <Skill path={paths.javascript} text="JavaScript"/>
                <Skill path={paths.typescript} text="TypeScript"/>
                <Skill path={paths.tailwind} text="Tailwind"/>
                <Skill path={paths.sass} text="Sass"/>
                <Skill path={paths.css} text="CSS"/>
                <Skill path={paths.html} text="HTML"/>
            </div>
            
        </div>
    )
}