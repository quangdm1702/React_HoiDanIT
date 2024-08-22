import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
//stateless vs statefull
// class DisplayInfor extends React.Component {

//     render() {
//         //props => viet tat cua properties
//         // destructuring array
//         const { listUsers } = this.props;
//         // template + logic js
//         console.log('>>> call me render ')

//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
//                                     <div>My name is {user.name}</div>
//                                     <div>My age is {user.age}</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>

//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    return (
        <div className="display-infor-container">

            {true &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age >= 18 ? "green" : "red"}>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>
                        )
                    })}
                </>
            }
        </div>

    );
}

export default DisplayInfor;