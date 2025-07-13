import { useState } from "react";

export default function FunCompo() {
    const [userWrittenValue, setUseWrittenValue] = useState("");
    const handleClick = (e) => {
        let inputValue = e.target.value;
        setUseWrittenValue(inputValue);
    }

    return (
        <div>
            <input placeholder="Enter the Text..." type="text" /><br />
            <button onClick={handleClick}>ADD</button>
            <ul>
                <li>{userWrittenValue}</li>
            </ul>
        </div>
    )
}