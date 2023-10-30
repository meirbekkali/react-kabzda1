import React from "react";
import {NavLink} from "react-router-dom";

const Users=(props)=>{
    return ( props.dataOfUsersName.map(e =>(
        <div>
            <img src="" alt="" />
        <div id = {e.id} className= {e.message}>
            <NavLink to={e.id}> {e.message} </NavLink>
        </div>
        </div>
    )))
}

export default Users