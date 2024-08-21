import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component { // ke thua lai tinh nang component cua react
    //JSX: cho phep viet code JS trong HTML
    //DRY: don't repeat yourself

    state = {
        listUsers: [
            { id: 1, name: "Quang", age: '16' },
            { id: 2, name: "Minh", age: '21' },
            { id: 3, name: "Doan", age: '22' }
        ]
    }


    render() {
        return (
            <div>
                <UserInfor />
                <br></br>
                {/* Truyen props: name , value xuong cho components DisplayInfor */}
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;