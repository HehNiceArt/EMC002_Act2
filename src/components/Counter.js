import React, { useEffect, useState } from "react";
import '../App.css'
export default function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        alert('Button was clicked')
    };

    useEffect(() => {
        document.title = `You clicked ${count} times!`;
    }, [count]);
    return (
        <div className="App">
            <p>You clicked {count} times!</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}