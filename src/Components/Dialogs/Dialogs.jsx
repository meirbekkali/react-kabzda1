import React from "react";
import d from './Dialogs.module.css'
import MessageContainer from "./MessagesFromUsers/MessageComponentContainer";
import UserContainer from "./Users/UserContainer";





const Dialogs = (props) => {
    return (
        <div className={d.Dialogs}>
            <div >
            <UserContainer store ={props.store}/>
            </div>
            <div>
            <MessageContainer store={props.store}/>
        </div>
        </div>
    )
};

export default Dialogs;