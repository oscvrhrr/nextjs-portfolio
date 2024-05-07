



export default function Navbar () {
    return (
        <nav className="h-20 bg-black flex justify-around items-center">
            <div>
                <p className="italic">OSCARDEV</p>
            </div>

            <ul className="flex w-96 justify-around">
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};