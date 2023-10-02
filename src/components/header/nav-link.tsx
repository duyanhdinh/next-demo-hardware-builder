import Link from "next/link";

type NavLinkProp = {
    href: string,
    title: string
}

export function NavLink({href, title} : NavLinkProp) {
    return (
        <Link href={href}>
            <div className="w-[120px] h-full border-l border-r border-gray-500 flex justify-center items-center capitalize hover:bg-gray-700">
                <div className="w-auto h-auto"
                >{title}</div>
            </div>
        </Link>


    )
}