import React from "react";

class MyComponent extends React.Component { // ke thua lai tinh nang component cua react
    //JSX: cho phep viet code JS trong HTML

    state = {
        name: 'Quang',
        age: 21,
        address: 'Ha Noi'
    };

    handleClick(event) {
        console.log('>>> Click me');
        // merger state chi trong react class
        this.setState({
            name: 'Minh Quang',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleOnMoverOver(event) {
        // console.log(event.pageX);
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm  {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;