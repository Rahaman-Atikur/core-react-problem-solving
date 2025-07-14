import { use } from "react"
import Theme from "./theme";

export default function Display({promiseFromApi}){
    const promiseResult = use(promiseFromApi);
    console.log(promiseResult);
    return (
        <div>
            <Theme></Theme>
            <h2>My Data:</h2>
            {
                promiseResult.map((user)=>
                    <ul>
                        <li> <h2>{user.name}</h2></li>
                    </ul>
               
                )
            }
        </div>
    )
}