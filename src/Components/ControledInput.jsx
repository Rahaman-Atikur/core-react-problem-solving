import { useState } from "react"

export default function ControlledIn() {
    const [text, settext] = useState("");
    const handleUserInput = (e) => {
        settext(e.target.val);
    }
    return (
        <div>
            <input value={text} onChange={handleUserInput} placeholder="Please Write something..." type="text" />
            <p>You Typed:{text}</p>
        </div>
    )
}