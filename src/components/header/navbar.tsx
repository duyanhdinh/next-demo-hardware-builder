"use client";

import {NavLink} from "@components/header/nav-link";
import {useAppSelector} from "@store/hooks";
import {signOutApp} from "@fire/auth";

export function Navbar () {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    const signOut = () => signOutApp();

    return (
        <div className="w-full h-[50px] bg-gray-800 flex justify-center text-white">
            <div className="w-[1080px] flex justify-between">
                <div className="w-3/4 h-full flex">
                    <NavLink href='/' title='home' />
                </div>
                <div className="w-1/4 h-full flex justify-end">
                    {
                        isAuth
                            ? <div
                                className="w-[120px] h-full border-l border-r border-gray-500 flex justify-center items-center capitalize hover:bg-gray-700 cursor-pointer"
                                onClick={signOut}
                            >sign out</div>
                            : <NavLink href='/sign-in' title='sign in' />
                    }
                </div>
            </div>
        </div>
    );
}
