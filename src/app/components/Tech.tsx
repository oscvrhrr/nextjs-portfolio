
interface TechProp {
    tech: string
}

export default function Tech ({tech}: TechProp) {
    return (
        <li className="border rounded border-white inline m-1 py-1 px-2 text-sm">
            {tech}
        </li>
    )
}