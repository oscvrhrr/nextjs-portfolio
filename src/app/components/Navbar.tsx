



export default function Navbar () {
    

    return (
        <nav className="h-20 bg-black flex justify-between items-center fixed w-full z-10">
            <div className="ml-28 ">
                <p className="italic ">OSCARDEV</p>
            </div>

            <ul className="flex w-96 justify-around mr-28">
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};