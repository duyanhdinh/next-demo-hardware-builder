import ModalAutoShow from "@components/common/modal-auto-show";
import React from "react";
import SignIn from "@components/pages/sign-in/sign-in";


const modalId = 'modal_sign_in';
export default function Page() {
    return (
        <ModalAutoShow content={<SignIn />} modalId={modalId} />
    );
}