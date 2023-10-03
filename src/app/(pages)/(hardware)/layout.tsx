"use client";

import React, {useEffect} from "react";
import {getLocalMotherboard} from "@store/features/hardware/motherboard/motherboardSlice";
import {useAppDispatch} from "@store/hooks";
import {getLocalRam} from "@store/features/hardware/ram/ramSlice";
import {getLocalMonitor} from "@store/features/hardware/monitor/monitorSlice";

export default function HardwareLayout ({children} : {children: React.ReactNode}) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getLocalMotherboard());
        dispatch(getLocalRam());
        dispatch(getLocalMonitor());
    }, [dispatch]);

    return (
        <>{children}</>
    );
}