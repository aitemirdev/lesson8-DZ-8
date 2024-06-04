import React from 'react';
import InputForm from "../../componets/input/InputFrom";

const ModalWindow = ({ children }) => {
    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                {children}
                <InputForm/>
            </div>
        </div>
    );
};

export default ModalWindow;