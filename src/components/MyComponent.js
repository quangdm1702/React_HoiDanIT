import React from "react";
import UserInfor from "./UserInfor";

class MyComponent extends React.Component { // ke thua lai tinh nang component cua react
    //JSX: cho phep viet code JS trong HTML


    render() {
        return (
            <div>
                <UserInfor />
            </div>
        );
    }
}

export default MyComponent;