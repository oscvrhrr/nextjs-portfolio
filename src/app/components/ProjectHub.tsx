import Project from "./Project";
import Link from "next/link";

const imagePaths = {
  ecommerce: "/assets/project-image-1.jpg",
  musicapp: "/assets/project-image-2.jpg",
  photosnap: "/assets/project-image-3.jpg",
  dine: "/assets/project-image-4.jpg"
};

export default function ProjectHub() {
  return (
    <>
      <h2
        id="ProjectHub!"
        className="text-7xl from-[#8E62BC] via-[#4A91E3] to-[#AB2574] bg-gradient-to-r bg-clip-text text-transparent ml-36 mb-24"
      >
        Portfolio
      </h2>
      <div className="w-[72.56rem] flex flex-wrap m-auto justify-between">
        <Link href={"https://ecommerce-react-audiophile.netlify.app/"} target="_blank">
          <Project
            cover={imagePaths.ecommerce}
            tech1="React"
            tech2="SCSS"
            tech3="Vite"
          />
        </Link>
        <Link href={"https://music-app-react-five.vercel.app/"} target="_blank">
            <Project
            cover={imagePaths.musicapp}
            tech1="TypeScript"
            tech2="Next.js"
            tech3="Tailwind"
            />
        </Link>
        <Link href={"https://oscvrhrr.github.io/photosnap-multi-pg-website/"} target="_blank">
            <Project
            cover={imagePaths.photosnap}
            tech1="HTML"
            tech2="CSS"
            tech3="JavaScript"
            />
        </Link>
        <Link href={"https://oscvrhrr.github.io/dine-restaurant/"} target="_blank">
            <Project
            cover={imagePaths.dine}
            tech1="HTML"
            tech2="CSS"
            tech3="JavaScript"
            />
        </Link>
      </div>
    </>
  );
}
