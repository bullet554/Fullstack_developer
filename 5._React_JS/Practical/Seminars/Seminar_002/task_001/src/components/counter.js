import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => { setCount(count + 1) }

    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>count+1</button>
        </>
    );
}

export default Counter;