import {useState, useEffect} from 'react';

function FunctionCounter(props) {
    // Setup the initial state of the component ...
    const [state, setState] = useState({
        id: Math.round(Math.random() * 100),
        count: 0
    });
 
    // Setup handlers for component mount and dismount ....
    useEffect(() => {
        const timerID = setInterval(() => {
                setState((state, props) => {
                    return {
                        ...state,
                        count: state.count + 1
                    };
                });
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
            <p>Function Counter ID: {state.id}, Count: {state.count}</p>
        </div>
    );
}

export default FunctionCounter;