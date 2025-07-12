export default function ListRendering() {
    const fruitsToBeRendered = ["Apple", "Banana", "Mango", "Grapes"];
    return (
        <ul>
            {
                fruitsToBeRendered.map((fruit) =>
                    <li>{fruit}</li>
                )
            }
        </ul>
    )
}