import { useState } from "react"

export default function Theme() {
    const [currentTheme, setCurrentTheme] = useState(false)
    const handleClick = () => {
        setCurrentTheme(!currentTheme);
    }
    const themeStyles = {
        backgroundColor: currentTheme ? '#333' : '#fff'
    }
    return (
        <div style={themeStyles}>
            <button onClick={handleClick}>Change Theme</button>
        </div>
    )
}