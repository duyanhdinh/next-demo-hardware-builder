"use client";

import React from "react";
import {useRouter} from "next/navigation";

export type ModalType = {
    content: React.ReactNode,
    modalId: string
}

export default function Modal ({content, modalId}: ModalType) {
    const router = useRouter();
    const onDismiss = () => {
        router.back();
    };

    return (
        <dialog id={modalId} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                {content}
            </div>

            <form method="dialog" className="modal-backdrop" onClick={onDismiss}>
                <button>close</button>
            </form>
        </dialog>
    );
}