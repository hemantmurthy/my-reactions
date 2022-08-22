import {useState, useEffect} from 'react';

// Similar to FunctionCounter but uses multiple state variables ...

function FunctionAltCounter(props) {
    // Setup the initial state of the component ...
    const [count, setCount] = useState(0);
    const [id] = useState(Math.round(Math.random() * 100));

    // Setup handlers for component mount and dismount ....
    useEffect(() => {
        const timerID = setInterval(() => {
                setCount((count, props) => count + 1);
            }, 
            props.interval ? Number.parseInt(props.interval) : 1000
        );

        // Return cleanup function ...
        return () => {
            clearInterval(timerID);
        };
    }, []);


    return (
        <div>
            <p>Function Alt Counter ID: {id}, Count: {count}</p>
        </div>
    );
}

export default FunctionAltCounter;