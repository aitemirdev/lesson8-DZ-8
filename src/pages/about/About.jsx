import React, { useContext } from 'react';
import { ModalContext } from '../modalPaages/ModalContext';
import ModalWindow from '../modalPaages/ModalWindow';

const About = () => {
    const { isModalOpen } = useContext(ModalContext);

    return (
        <div>
            <h1>About Page</h1>
            {isModalOpen && <ModalWindow>Modal Content</ModalWindow>}
        </div>
    );
};

export default About;