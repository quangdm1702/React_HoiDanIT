import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

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

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers],
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter((item) => item.id !== userId); // loc user theo id
        this.setState({
            listUsers: listUsersClone
        })
    }


    render() {
        return (
            <>
                <div>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}

                    />
                    <br></br>
                    {/* Truyen props: name , value xuong cho components DisplayInfor */}
                    <DisplayInfor
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
            </>
        );
    }
}

export default MyComponent;