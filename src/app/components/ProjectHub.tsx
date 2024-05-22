import Project from "./Project"


const imagePaths = {
    ecommerce: "/assets/project-image-3.jpg",
    photosnap: "/assets/project-image-2.jpg",
    dine: "/assets/project-image-4.jpg"


}


export default function ProjectHub () {
    return (
        <div className="w-[72.56rem] flex flex-wrap m-auto justify-between">
            <Project cover={imagePaths.ecommerce} tech1="React" tech2="SCSS" tech3="Vite" />
            <Project cover={imagePaths.photosnap} tech1="TypeScript" tech2="Next.js" tech3="Tailwind"/> 
            <Project cover={imagePaths.photosnap} tech1="HTML" tech2="CSS" tech3="JavaScript"/>
            <Project cover={imagePaths.dine} tech1="HTML" tech2="CSS" tech3="JavaScript"/>

        </div>


    )
}