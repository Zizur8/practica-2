


import { useState } from "react";


export const Contador = () => {
    const [count, setCount] = useState(0);

    const handleSumarClick = () => {
        setCount(count + 1);
    }
    const handleRestarClick = () => {
        setCount(count - 1);
    }
    const handleResetClick = () => {
        setCount(0);
    }
    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={handleSumarClick}>Incrementar</button>
            <button onClick={handleRestarClick}>Restar</button>
            <button onClick={handleResetClick}>Resetear</button>
        </div>
    )
};