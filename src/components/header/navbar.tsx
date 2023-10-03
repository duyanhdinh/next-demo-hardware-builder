import {NavLink} from "@components/header/nav-link";

export function Navbar () {
    return (
        <div className="w-full h-[50px] bg-gray-800 flex justify-center text-white">
            <div className="w-[1080px] h-full flex">
                <NavLink href='/' title='home' />
            </div>
        </div>
    );
}
