"use client";

import React from "react";
import ModalAutoShow from "@components/common/modal-auto-show";
import Monitor from "@components/pages/monitor/monitor";

const content = (
    <Monitor />
);

const modalId = 'modal_monitor';

export default function Page () {

    return (
        <ModalAutoShow content={content} modalId={modalId} />
    );
}