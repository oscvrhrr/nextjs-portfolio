'use client'
import Skill from "./Skill"
import { animate, stagger, motion } from "framer-motion"




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
        <div className="h-[18.75rem] bg-gray-900 mx-4 my-[5rem] mb-10 rounded-3xl shadow-[0_0_45px_0_rgba(0,0,0,0.3)] shadow-[#2563EB]">
            <h3 className="text-center text-3xl pt-5 ">Technologies</h3>
            <motion.div  className="text-white flex flex-wrap justify-evenly items-center  p-8"
                initial={{opacity: 0}}
                // animate={{opacity: 1}}
                whileInView={{opacity: 1, }}
                transition={{duration: .3, delay: .35}}
                viewport={{once: true}}
            >
                <Skill path={paths.react} text="React"/>
                <Skill path={paths.javascript} text="JavaScript"/>
                <Skill path={paths.typescript} text="TypeScript"/>
                <Skill path={paths.tailwind} text="Tailwind"/>
                <Skill path={paths.sass} text="Sass"/>
                <Skill path={paths.css} text="CSS"/>
                <Skill path={paths.html} text="HTML"/>
            </motion.div>
            
        </div>
    )
}