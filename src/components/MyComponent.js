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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm  {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;