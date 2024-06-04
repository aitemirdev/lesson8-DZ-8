import React, { useRef } from 'react';

const InputForm = () => {
    const nameRef = useRef(null)
    const usernameRef = useRef(null)
    const emailRef = useRef(null)

    const handleCreateClick = () => {
        const newObject = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
        };
        console.log(newObject)
    };

    return (
        <div>
            <input type="text" placeholder="Name" ref={nameRef} />
            <input type="text" placeholder="Username" ref={usernameRef} />
            <input type="email" placeholder="Email" ref={emailRef} />
            <button onClick={handleCreateClick}>Create</button>
        </div>
    );
};

export default InputForm;