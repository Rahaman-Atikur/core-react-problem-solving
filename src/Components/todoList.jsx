// import { useState } from "react"
// export default function TodoList() {
//     const [currentList, setCurrentList] = useState([]);
//     const [inputText, setInputText] = useState("");
//     const handleInputChange = (e) => {
//         let userTypedWriting = e.target.value;
//         setInputText(userTypedWriting);
//     }
//     const handleAdd = () => {
//         setCurrentList(...currentList, inputText);
//         setInputText("");
//     }
//     const handleRemove = () => {
//         currentList("");
//     }
//     return (
//         <div>
//             <input onChange={handleInputChange} type="text" />
//             <button onClick={handleAdd}> ADD</button>
//             <button onClick={handleRemove}>Remove</button>
//             <ul>
//                 <li>{currentList}</li>
//             </ul>
//         </div>
//     )
// }