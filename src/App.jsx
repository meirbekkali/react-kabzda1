import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import StoreContext from "./Context";

const App = (props) => {
    return (
        <Router>
            <div className='app-wraper'>
                <Header/>
                <Navbar/>
                <div className='app-wraper-content'>
                    <Routes>
                        <Route path='/profile'
                               Component={() =>
                                   <Profile

                                   />}
                        />
                        <Route path='/dialogs'
                               Component={() =>
                                   <Dialogs

                                   />}
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    )
};


export default App;
