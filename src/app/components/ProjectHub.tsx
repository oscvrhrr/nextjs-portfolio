import Project from "./Project"


const imagePaths = {
    ecommerce: "/assets/project-image-3.jpg"
}


export default function ProjectHub () {
    return (
        <div className="w-[72.56rem] flex flex-wrap m-auto justify-between">
            <Project cover={imagePaths.ecommerce} tech1="React" tech2="SCSS" tech3="Vite" />



        </div>


    )
}