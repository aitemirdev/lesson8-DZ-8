import React, { useContext } from 'react';
import {ModalContext} from "../modalPaages/ModalContext";

const Main = () => {
    const { openModal, closeModal } = useContext(ModalContext);

    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={openModal}>Open Modal</button>
            <button onClick={closeModal}>Close Modal</button>
        </div>
    );
};

export default Main;