import React from 'react'

class ClassComponent extends React.Component {
    render() {
        return (
        <div>
            <h1>Class based component</h1>
            <p>Welcome, {this.props.name}. This is a class based component.</p>
        </div> 
        );
    }
}

export default ClassComponent;