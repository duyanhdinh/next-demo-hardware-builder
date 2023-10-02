"use client";

import React, {useEffect} from "react";
import Modal, {ModalType} from "@components/common/modal";

export default function ModalAutoShow({content, modalId}: ModalType) {
    useEffect(() => {
        const modal= document.getElementById(modalId) as HTMLDialogElement;
        modal.showModal();
    }, []);

    return (
        <Modal content={content} modalId={modalId} />
    )
}