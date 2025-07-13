
// import './App.css'
// import './Color'
// import Color from './Color'
// import Reset from './Components/reset'
// import Visibility from './Components/toggleVisibility'
// import ControlledIn from './Components/ControledInput'
// import ListRendering from './Components/listRendering'
// import FunCompo from './Components/functionalComponents'
import { useState } from 'react';
import Username from './Components/listOfUser';
function App() {
  const [data, setData] = useState([]);
  const callFromApi = async () => {
    try {
      const promise = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await promise.json();
      setData(jsonData);
    }
    catch{
      console.error("Error Fetching data");
    }
  }
  const displayData = () => {
    console.log(data);
  }

  return (
    <>
      {/* <Color></Color> */}
      {/* <Reset></Reset> */}
      {/* <Visibility></Visibility> */}
      {/* <ControlledIn></ControlledIn> */}
      {/* <ListRendering></ListRendering> */}
      {/* <FunCompo></FunCompo> */}
      {/* <Username></Username> */}
      {
        data.map((user)=>
        <li>{user.name}</li>
        )
      }

    </>
  )
}
export default App
