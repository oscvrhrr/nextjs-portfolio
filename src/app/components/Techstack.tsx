'use client'
import Skill from "./Skill"
import { animate, stagger, motion } from "framer-motion"




const paths = [
    { name: 'react', path: '../../../../assets/svg/react.svg' },
    { name: 'javascript', path: '../../../../assets/svg/javascript.svg' },
    { name: 'tailwind', path: '../../../../assets/svg/tailwind.svg' },
    { name: 'sass', path: '../../../../assets/svg/sass.svg' },
    { name: 'css', path: '../../../../assets/svg/css.svg' },
    { name: 'html', path: '../../../../assets/svg/html.svg' },
    { name: 'node', path: '../../../../assets/svg/nodejs-icon.svg' },
];

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y:0,
        transition: {
            delay: 0.22 * index
        }
    })
}


export default function Techstack () {
    return (
        <div className="lg:mx-auto lg:h-[18.75rem] lg:w-[72.56rem] h-[18.75rem] bg-gray-900 mx-4 my-[5rem] mb-10 rounded-3xl shadow-[0_0_45px_0_rgba(0,0,0,0.3)] shadow-[#2563EB]">
            <h3 className="text-center text-3xl pt-5 ">Technologies</h3>
            <div className="lg:w-[51rem] lg:p-0 lg:m-auto lg:h-[13.9rem] lg:justify-around text-white flex flex-wrap justify-evenly items-center  p-8">
            {
                paths.map((tech, index) => (
                    <motion.div  
                    variants={fadeInAnimationVariants}
                    initial={"initial"}
                    whileInView={"animate"}
                    viewport={{once: true}}
                    custom={index}
                    key={index}
                >
                    <Skill path={tech.path} text={tech.name}/>
                </motion.div>
                    
                ))
            }
            </div>
            
        </div>
    )
}