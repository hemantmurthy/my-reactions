import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            id: Math.round(Math.random() * 100)
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.next(), 
            this.props.interval ? Number.parseInt(this.props.interval) : 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    next() {
        this.setState((state, props) => ({
            count: state.count + 1
        }));
    }

    render() {
        return (
            <div>
                <h1>Counter ID: {this.state.id}, Count: {this.state.count}</h1>
            </div>
        );
    }
}

export default Counter;