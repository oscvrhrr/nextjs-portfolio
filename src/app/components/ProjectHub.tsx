import Project from "./Project";
import Link from "next/link";

const imagePaths = {
  ecommerce: "/assets/project-image-1.jpg",
  musicapp: "/assets/project-image-2.jpg",
  photosnap: "/assets/project-image-3.jpg",
  dine: "/assets/project-image-4.jpg",
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
        <Project
          cover={imagePaths.ecommerce}
          tech1="React"
          tech2="SCSS"
          tech3="Vite"
          site="https://ecommerce-react-audiophile.netlify.app/"
          code="https://github.com/oscvrhrr/ecommerce-store"
          text="Audiophile an e-commerce store. A fully responsive React App, on mobile, iPad, and Desktop."
        />

        <Project
          cover={imagePaths.musicapp}
          tech1="TypeScript"
          tech2="Next.js"
          tech3="Tailwind"
          site="https://music-app-react-five.vercel.app/"
          code="https://github.com/oscvrhrr/music-app-react"
          text="Musica an app thats connected to spotify's RESTapi. Relax and enjoy the tunes."
        />

        <Project
          cover={imagePaths.photosnap}
          tech1="HTML"
          tech2="CSS"
          tech3="JavaScript"
          site="https://oscvrhrr.github.io/photosnap-multi-pg-website/"
          code="https://github.com/oscvrhrr/photosnap-multi-pg-website"
          text="PhotoSnap a multi-page marketing site. Fully responsive on mobile, iPad, and desktop."
        />

        <Project
          cover={imagePaths.dine}
          tech1="HTML"
          tech2="CSS"
          tech3="JavaScript"
          site="https://oscvrhrr.github.io/dine-restaurant/"
          code="https://github.com/oscvrhrr/dine-restaurant"
          text="A restaurant website that allows users to book reservations. Fully responsive on mobile, iPad, and desktop."
        />
      </div>
    </>
  );
}
