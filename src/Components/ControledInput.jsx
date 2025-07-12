import { useState } from "react"

export default function ControlledIn() {
    const [text, settext] = useState("");
    const handleUserInput = (e)=>{
       settext(e.target.val);
    }
    return (
        <div>
            <input  onChange={handleUserInput} placeholder="type" input= "text" />
            <p>You Typed:{text}</p>
        </div>
    )
}