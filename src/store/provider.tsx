"use client";

import {Provider} from "react-redux";
import {setupStore} from "@store/store";
import React from "react";

export default function StoreProvider ({children} : {children: React.ReactNode}) {
    return (
        <Provider store={setupStore()}>{children}</Provider>
    );
}