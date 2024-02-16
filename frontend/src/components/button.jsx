import { useState } from "react";

const button = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    );
};

export default button;
