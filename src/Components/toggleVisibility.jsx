import { useState } from "react"

export default function Visibility() {
    const [show, setshow] = useState(false);
    const handleToggle = () => {
        setshow(!show);
    }
    const val = show ? "Hi React" : "";
    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>
            <p>{val}</p>
        </div>
    )
}