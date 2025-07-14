import { use } from "react"

export default function Display({promiseFromApi}){
    const promiseResult = use(promiseFromApi);
    console.log(promiseResult);
    return (
        <div>
            <h2>My Data:</h2>
            {
                promiseResult.map((user)=>
                <h2>{user.name}</h2>
                )
            }
        </div>
    )
}