"use client";

import Motherboard from "@components/pages/motherboard/motherboard";
import React from "react";
import ModalAutoShow from "@components/common/modal-auto-show";

const content = (
    <Motherboard />
);

const modalId = 'modal_motherboard';

export default function Page() {

    return (
        <ModalAutoShow content={content} modalId={modalId} />
    )
}