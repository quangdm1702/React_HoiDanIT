import React from "react";

class MyComponent extends React.Component { // ke thua lai tinh nang component cua react
    //JSX: cho phep viet code JS trong HTML

    state = {
        name: 'Quang',
        age: 21,
        address: 'Ha Noi'
    };

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        );
    }
}

export default MyComponent;