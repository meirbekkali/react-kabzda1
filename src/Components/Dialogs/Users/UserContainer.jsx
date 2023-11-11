import React from "react";
import Users from "./UserComponent";

const UsersContainer=(props)=>{
    let stateUsers = props.store.getState()
    let dataOfUsersName =
        stateUsers.DialogsState.DialogsState.DialogsPageUsers.DataOfUsersName

    return <Users dataOfUsersName={dataOfUsersName}/>
}

export default UsersContainer