import Project from "./Project"


const imagePaths = {
    ecommerce: "/assets/project-image-3.jpg",
    photosnap: "/assets/project-image-2.jpg",
    dine: "/assets/project-image-4.jpg"


}


export default function ProjectHub () {
    return (
        <>
            <h2 className="text-7xl from-[#8E62BC] via-[#4A91E3] to-[#AB2574] bg-gradient-to-r bg-clip-text text-transparent ml-36 mb-24">Portfolio</h2>
            <div className="w-[72.56rem] flex flex-wrap m-auto justify-between">
                <Project cover={imagePaths.ecommerce} tech1="React" tech2="SCSS" tech3="Vite" />
                <Project cover={imagePaths.photosnap} tech1="TypeScript" tech2="Next.js" tech3="Tailwind"/> 
                <Project cover={imagePaths.photosnap} tech1="HTML" tech2="CSS" tech3="JavaScript"/>
                <Project cover={imagePaths.dine} tech1="HTML" tech2="CSS" tech3="JavaScript"/>

            </div>
        </>


    )
}