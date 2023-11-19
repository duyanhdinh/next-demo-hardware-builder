"use client";

import React from "react";
import {signInGoogle} from "@fire/auth";
import {storeUser} from "@fire/firestore";
import {useAppSelector} from "@store/hooks";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const router = useRouter();
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    const loginGoogle = async () => {
        try {
            const { user } = await signInGoogle();
            await storeUser(user);
            window.location.href = "/";
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="w-full h-full min-h-[40vh] flex flex-col justify-center items-center">
                <div
                    role={'sign-in-with-google'}
                    className="px-4 py-2 rounded-lg shadow-2xl border border-gray-500 bg-red-700 cursor-pointer font-semibold text-white mb-4"
                    onClick={loginGoogle}
                >Sign In with Google</div>
            </div>
        </>
    );
}