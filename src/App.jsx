import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Users from "./Components/Dialogs/Users/UserComponent";
import UserSearchContainer from "./Components/FindUser/UserSearchContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Header from "./Components/Header/Header";


const App = (props) => {
    return (
        <Router>
            <div className='app-wraper'>
                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>
                    <Routes>
                        <Route path='/profile/:userId?'
                               Component={() =>
                                   <ProfileContainer

                                   />}
                        />
                        <Route path='/dialogs'
                               Component={() =>
                                   <Dialogs
                                   />}
                        />
                        <Route path='/users'
                               Component={() =>
                                   <Users
                                   />}
                        />
                        <Route path='/UserSearch'
                               Component={() =>
                                   <UserSearchContainer
                                   />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    )
};


export default App;
