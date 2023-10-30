import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <Router>
            <div className='app-wraper'>
                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>
                    <Routes>
                    <Route path='/profile' Component={()=><Profile
                        data = {props.data.ProfilePagePosts.Data_of_Posts}
                        dispatch={props.dispatch}/>} />
                    <Route path='/dialogs' Component={()=><Dialogs
                        data = {props.data}
                        dispatch={props.dispatch}/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
};




export default App;
