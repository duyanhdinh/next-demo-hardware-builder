"use client";

import React, {useEffect, useState} from "react";
import Monitor from "@components/pages/monitor/monitor";
import {useAppDispatch} from "@store/hooks";
import {getLocalMotherboard} from "@store/features/hardware/motherboard/motherboardSlice";
import {getLocalRam} from "@store/features/hardware/ram/ramSlice";
import {getLocalMonitor} from "@store/features/hardware/monitor/monitorSlice";
import Motherboard from "@components/pages/motherboard/motherboard";
import Ram from "@components/pages/ram/ram";
import {RELEASE_URI_HARDWARE} from "@const/dynamic-route/hardware";

const getComponent = (hardware: string): React.ReactNode => {
    switch (hardware) {
        case RELEASE_URI_HARDWARE.MOTHERBOARD:
            return (<Motherboard/>);
        case RELEASE_URI_HARDWARE.RAM:
            return (<Ram/>);
        case RELEASE_URI_HARDWARE.MONITOR:
            return (<Monitor/>);
        default:
            return null;
    }
};

const getLocalValue = (dispatch: ReturnType<typeof useAppDispatch>, hardware: string): void => {
    switch (hardware) {
        case RELEASE_URI_HARDWARE.MOTHERBOARD:
            dispatch(getLocalMotherboard());
            break;
        case RELEASE_URI_HARDWARE.RAM:
            dispatch(getLocalRam());
            break;
        case RELEASE_URI_HARDWARE.MONITOR:
            dispatch(getLocalMonitor());
            break;
    }
};

export default function Page({params : { hardware }}: { params: { hardware: string } }) {
    const dispatch = useAppDispatch();
    const [Hardware, setHardware] = useState<React.ReactNode>(null);

    useEffect(() => {
        getLocalValue(dispatch, hardware);

        setHardware(getComponent(hardware));
    }, [dispatch, hardware]);

    return (
        <>{Hardware}</>
    );
}