
import { useState } from "react";


export const Restador = () => {
    const [count, setCount] = useState(100);

    const handleClick = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={handleClick}>Restar</button>
        </div>
    )
};