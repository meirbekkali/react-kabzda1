// import React from "react";
// import classes from './Header.module.css';
// import {NavLink} from "react-router-dom";
// import {setUserData} from "../../Redux/authReducer";
//
// const Header = (props) => {
//     return (
//         <header className={classes.header}>
//             <p className={classes.leftText}>
//                 <span className={classes.leftText}>
//                 Connect
//                 </span>
//             </p>
//             <div className={classes.rightText}>
//                 { props.isAuth ? props.login :<NavLink to={'/login'} >
//                         Login
//                     </NavLink>}
//                         </div>
//                         </header>
//                         )
//                     };
//
//                     export default Header;


import React from "react";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login }) => {
    return (
        <header className={classes.header}>




            <div className="container">
                <svg viewBox="0 0 960 300">
                    <symbol id="s-text">
                        <text textAnchor="middle" x="50%" y="80%">Connect</text>
                    </symbol>

                    <g className = "g-ants">
                      </g>
                </svg>
            </div>





            <div className={classes.rightText}>
                {isAuth ? login : <NavLink to={'/login'}>
                    Login
                </NavLink>}
            </div>
        </header>
    );
};

export default Header;