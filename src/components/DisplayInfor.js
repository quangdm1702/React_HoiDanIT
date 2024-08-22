import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';
//stateless vs statefull

const DisplayInfor = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true); //[ding nghia bien, ham] = useState(true), gan true cho bien, day la destructuring
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    console.log('>> call me render');

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You deleted all the users');
            }
            console.log('>> call me useEffect');
        }, [listUsers]
    );

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? 'Hide list users' : 'Show list users'}
                </span>
            </div>
            {isShowHideListUser &&
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