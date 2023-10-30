import React from "react";
import es from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={es.nav}>
            <div className={es.item}>
                <NavLink to="/profile" style={({isActive, isPending}) => {
                    /* highlite the active link*/
                    return {
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "white" : "black",
                    };
                }}> Profile </NavLink>
            </div>
            <div className={es.item}>
                <NavLink to="/dialogs" style={({isActive, isPending}) => {
                    return {
                        /* highlite the active link*/
                        fontWeight: isActive ? "bold" : "",
                        color: isPending ? "red" : "black",
                    };
                }}> Messages </NavLink>
            </div>
            <div className={es.item}>
                <NavLink to=""> News </NavLink>
            </div>
            <div className={es.item}>
                <NavLink to=""> Music </NavLink>
            </div>
            <div className={es.item}>
                <NavLink to=""> Settings </NavLink>
            </div>
        </nav>
    )
};

export default Navbar