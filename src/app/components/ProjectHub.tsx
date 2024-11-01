import Project from "./Project";
import Tech from "./Tech";

const imagePaths = {
  ecommerce: "/assets/project-image-1.jpg",
  musicapp: "/assets/moment.png",
  beatplay: "/assets/project-image-2.jpg",
  eatbetter: "/assets/file-uploader.png",
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
        site="https://file-uploader-production-c9a3.up.railway.app/"
        code="https://github.com/oscvrhrr/file-uploader"
        text="Fullstack File Storage App that allows users to organize, upload, & download files"
      >
       <Tech tech="Express"/>
       <Tech tech="TailwindCSS"/>
       <Tech tech="Prisma"/>
       <Tech tech="PostgreSQL"/>

      </Project>

      <Project
        cover={imagePaths.musicapp}
        site="https://moment-1aws.onrender.com"
        code="https://github.com/oscvrhrr/moment"
        text="A Music Festival inventory app which allows users to create, manage and store popular upcoming events"
      >
       <Tech tech="Express"/>
       <Tech tech="TailwindCSS"/>
       <Tech tech="PostgreSQL"/>
       <Tech tech="Supabase"/>
       </Project>

       <Project
          cover={imagePaths.beatplay}
          site="https://music-app-react-five.vercel.app"
          code="https://github.com/oscvrhrr/music-app-react"
          text="BeatPlay: Stream music on demand. relax and enjoy the tunes!"
        >
          <Tech tech="TypeScript"/>
          <Tech tech="React"/>
          <Tech tech="Next.js"/>
          <Tech tech="Supabase"/>
          <Tech tech="JWT"/>
        </Project>

      <Project
        cover={imagePaths.ecommerce}
        site="https://ecommerce-react-audiophile.netlify.app/"
        code="https://github.com/oscvrhrr/ecommerce-store"
        text="Audiophile an e-commerce store. A fully responsive React App, on mobile, iPad, and Desktop."
      >
        <Tech tech="React"/>
        <Tech tech="SCSS"/>
        <Tech tech="Vite"/>
      </Project>
      </div>
    </>
  );
}
