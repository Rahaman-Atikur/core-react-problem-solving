import { useState } from "react"

export default function Counter() {
    const [currentNumber, setCurrentNumber] = useState(0);
    const handleAddButton = () => {
        setCurrentNumber(currentNumber + 1);
    }
    const handleDecrementNumber = () => {
        setCurrentNumber(currentNumber - 1);
    }
    return (
        <div>
            <p>Current number:{currentNumber}</p>
            <button onClick={handleAddButton}>ADD</button>
            <button onClick={handleDecrementNumber}>Remove</button>
        </div>
    )
}