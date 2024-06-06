import Link from "next/link"


export default function Navbar () {
    

    return (
        <nav className="h-20 w-full bg-transparent flex justify-between items-center fixed z-20 top-0">
            <div>
                <Link href={"#Home"} className="italic p-1 ml-4 bg-gradient-to-r from-white to to-zinc-500 text-transparent bg-clip-text">OSCARDEV</Link>
            </div>

            <ul className="flex justify-around mr-4">
                <Link className="mx-2 bg-gradient-to-t from-white to to-zinc-500 text-transparent bg-clip-text" href={"#GetToKnowMe!"} >About</Link>
                <Link className="mx-2 bg-gradient-to-t from-white to to-zinc-500 text-transparent bg-clip-text" href={"#ProjectHub!"} >Projects</Link>
                <Link className="mx-2 bg-gradient-to-t from-white to to-zinc-500 text-transparent bg-clip-text" href={"#LetsMeet!"} >Contact</Link>
                
            </ul>
        </nav>
    )
};