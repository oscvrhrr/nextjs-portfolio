import Link from "next/link"


export default function Navbar () {
    

    return (
        <nav className="h-20 bg-transparent flex justify-between items-center fixed w-full z-10 top-0">
            <div className="ml-28 ">
                <Link href={"#Home"} className="italic p-1 bg-gradient-to-r from-white to to-zinc-500 text-transparent bg-clip-text">OSCARDEV</Link>

            </div>

            <ul className="flex w-96 justify-around mr-28 ">
                <Link className="bg-gradient-to-t from-white to to-zinc-500 text-transparent bg-clip-text" href={"#GetToKnowMe!"} >About</Link>
                <Link className="bg-gradient-to-t from-white to to-zinc-500 text-transparent bg-clip-text" href={"#ProjectHub!"} >Projects</Link>
                <Link className="bg-gradient-to-t from-white to to-zinc-500 text-transparent bg-clip-text" href={"#LetsMeet!"} >Contact</Link>
                
            </ul>
        </nav>
    )
};