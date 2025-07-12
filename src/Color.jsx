import { useState } from "react"
export default function Color() {
    const [changeColor,setchangeColor] = useState('lightgray');
    const handleColor = (e) => {
        setchangeColor(e.target.value);
    }
    return (
        <div>
           <input onChange={handleColor} type="color" placeholder="Type Color" />
           
        </div>
    )
}