"use client";

import Motherboard from "@components/pages/motherboard/motherboard";
import React, {useEffect, useState} from "react";
import ModalAutoShow from "@components/common/modal-auto-show";
import Ram from "@components/pages/ram/ram";
import Monitor from "@components/pages/monitor/monitor";
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

const modalId = 'modal_hardware';

/***
 Not working: https://github.com/vercel/next.js/issues/52533
 */
export default function Page ({params : { hardware }}: { params: { hardware: string } }) {
    const [content, setContent] = useState<React.ReactNode>(null);

    useEffect(() => {
        setContent(getComponent(hardware));
    }, [hardware]);

    return (
        <ModalAutoShow content={content} modalId={modalId} />
    );
}