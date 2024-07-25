import Project from "./Project";

const imagePaths = {
  ecommerce: "/assets/project-image-1.jpg",
  musicapp: "/assets/project-image-2.jpg",
  photosnap: "/assets/project-image-3.jpg",
  eatbetter: "/assets/new-project.png",
};

export default function ProjectHub() {
  return (
    <>
      <h2
        id="ProjectHub!"
        className="lg:ml-32 lg:mt-64 lg:text-7xl text-5xl from-[#8E62BC] via-[#4A91E3] to-[#AB2574] bg-gradient-to-r bg-clip-text text-transparent mt-40 ml-4 mb-36"
      >
        Portfolio
      </h2>
      <div className="lg:w-[72.56rem] lg:m-auto md:flex-wrap md:flex-row flex flex-col justify-between mx-4">
      <Project
          cover={imagePaths.eatbetter}
          tech1="Next.js"
          tech2="TypeScript"
          tech3="Supabase"
          site="https://eat-better.vercel.app/"
          code="https://github.com/adrianrramos/EatBetter"
          text="An fitness app that tracks calories, and lets users adjust their diet goals"
        />

        <Project
          cover={imagePaths.musicapp}
          tech1="TypeScript"
          tech2="Next.js"
          tech3="OAuth"
          site="https://music-app-react-five.vercel.app/"
          code="https://github.com/oscvrhrr/music-app-react"
          text="Musica an app thats connected to spotify's RESTapi. Relax and enjoy the tunes."
        />

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
          cover={imagePaths.photosnap}
          tech1="HTML"
          tech2="CSS"
          tech3="JavaScript"
          site="https://oscvrhrr.github.io/photosnap-multi-pg-website/"
          code="https://github.com/oscvrhrr/photosnap-multi-pg-website"
          text="PhotoSnap a multi-page marketing site. Fully responsive on mobile, iPad, and desktop."
        />

      </div>
    </>
  );
}
