"use client";

import React, {useEffect} from "react";
import {useAppDispatch} from "@store/hooks";
import {observerAuth, ObserverSignInCallback, ObserverSignOutCallback} from "@fire/auth";
import {signInUser, signOutUser} from "@store/features/auth/authSlice";
import {setCookie, deleteCookie} from "cookies-next";

export default function Observer({children} : {children: React.ReactNode}) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const onSignIn: ObserverSignInCallback = async (user) => {
            try {
                setCookie('userToken', await user.getIdToken());

                const {displayName, email} = user;

                dispatch(signInUser({displayName, email}));

            } catch (error) {
                console.log('error sign in', error);
            }
        };
        const onSignOut: ObserverSignOutCallback = () => {
            dispatch(signOutUser());

            deleteCookie('userToken');
        };
        
        observerAuth(onSignIn, onSignOut);
    }, [dispatch]);

    return (
        <>{children}</>
    );
}