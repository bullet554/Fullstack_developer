import { useState } from "react";

function TextInput() {
    const [text, setText] = useState();
    const handleChange = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            <input onChange={handleChange}></input>
            <p>{text}</p>
        </>
    );
}

export default TextInput;