import { Suspense, useState } from 'react';
import Username from './Components/listOfUser';
function App() {
  const promiseFromApi = fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json()).then((data)=>console.log(data));

  return (
    <>
      {/* <Color></Color> */}
      {/* <Reset></Reset> */}
      {/* <Visibility></Visibility> */}
      {/* <ControlledIn></ControlledIn> */}
      {/* <ListRendering></ListRendering> */}
      {/* <FunCompo></FunCompo> */}
      {/* <Username></Username> */}
      <Suspense fallback={<h2>Loading..</h2>}>
        <Username data={data} ></Username>
    </Suspense >


    </>
  )
}
export default App
