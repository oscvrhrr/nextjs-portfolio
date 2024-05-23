import Link from "next/link"


export default function Navbar () {
    

    return (
        <nav className="h-20 bg-transparent flex justify-between items-center fixed w-full z-10 top-0">
            <div className="ml-28 ">
                <p className="italic p-1 bg-gradient-to-r from-white to to-zinc-500 text-transparent bg-clip-text">OSCARDEV</p>
            </div>

            <ul className="flex w-96 justify-around mr-28 ">
                <Link className="bg-gradient-to-t from-white to to-zinc-500 text-transparent bg-clip-text" href={"#About"} >About</Link>
                <Link className="bg-gradient-to-t from-white to to-zinc-500 text-transparent bg-clip-text" href={"#About"} >Projects</Link>
                <Link className="bg-gradient-to-t from-white to to-zinc-500 text-transparent bg-clip-text" href={"#About"} >Contact</Link>
                
            </ul>
        </nav>
    )
};