import { useState } from "react"

export default function Reset() {
    const [increment, setIncrement] = useState(0);
    const handleIncrement = () => {

        setIncrement(increment + 1);
    }
    const handleReset = () => {
        setIncrement(0);
    }
    return (
        <div>
            <p>MyNumbers:{increment}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}