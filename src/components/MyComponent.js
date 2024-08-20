import React from "react";

class MyComponent extends React.Component { // ke thua lai tinh nang component cua react
    //JSX: cho phep viet code JS trong HTML
    render() {
        return(
            <div>
                My first Component

                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;