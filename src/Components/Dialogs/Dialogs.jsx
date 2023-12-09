import React from "react";
import d from './Dialogs.module.css'
import MessageContainer from "./MessagesFromUsers/MessageContainer";
import UserContainer from "./Users/UserContainer";





const Dialogs = (props) => {
    return (
        <div className={d.Dialogs}>
            <div >
            <UserContainer/>
            </div>
            <div>
            <MessageContainer/>
        </div>
        </div>
    )
};

export default Dialogs;