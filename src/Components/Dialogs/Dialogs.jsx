import React from "react";
import d from './Dialogs.module.css'
import Message from "./MessagesFromUsers/MessageComponent";
import User from "./Users/UserComponent";





const Dialogs = (props) => {
    return (
        <div className={d.Dialogs}>
            <div >
            <User dataOfUsersName={props.data.DialogsPageUsers.DataOfUsersName}/>
            </div>
            <div>
            <Message dataOfMessage={props.data.DialogsPageMessages}
                     dispatch={props.dispatch}/>
        </div>
        </div>
    )
};

export default Dialogs;