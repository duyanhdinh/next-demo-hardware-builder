"use client";

import React from "react";
import ModalAutoShow from "@components/common/modal-auto-show";
import Ram from "@components/pages/ram/ram";

const content = (
    <Ram />
);

const modalId = 'modal_ram';

export default function Page() {

    return (
        <ModalAutoShow content={content} modalId={modalId} />
    )
}