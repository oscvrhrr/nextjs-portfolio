"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type skillsProps = {
  path: string;
  text: string;
};

export default function Skill({ path, text }: skillsProps) {
  return (
    <motion.div className="flex flex-col items-center" whileHover={{scale: 1.2, rotate: -45, }}>
      <Image alt="Tech skill" src={path} width={65} height={65} />

      <p className="pt-1">{text}</p>
    </motion.div>
  );
}
