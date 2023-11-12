import { useEffect, useState } from "react"

interface Link {
    id: string
    url: URL
    name: string
    description: string
}

export default function Links() {
    const [links, setLinks] = useState<Link[]>([])
    useEffect(() => {
        fetch(`http://localhost:8080/links`)
            .then(rs => rs.json())
            .then((data: Link[]) => setLinks(data))
    }, [])
    return <>
        {links.map(link =>
            <a href={link.url.toString()}>{link.name}</a>
        )}
    </>
}