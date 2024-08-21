import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component { // ke thua lai tinh nang component cua react
    //JSX: cho phep viet code JS trong HTML


    render() {
        const myInfor = ['ab', 'c'];
        return (
            <div>
                <UserInfor />
                <br></br>
                {/* Truyen props: name , value xuong cho components DisplayInfor */}
                <DisplayInfor name="Quang" age='30' />
                <hr></hr>
                <DisplayInfor name="Minh" age={21} myInfor={myInfor} />
            </div>
        );
    }
}

export default MyComponent;