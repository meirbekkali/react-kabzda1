import React from "react";
import classes from './Profile.module.css'
import axios from "axios";
import {connect} from "react-redux";
import {SetUserProfile} from "../../Redux/PostsReducer";
import state from "../../Redux/State";
import Profile from "./Profile";




class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.SetUserProfile(response.data)
            })
    }

    render (){
        return (
        <div className={classes.content}>
            <Profile {...this.props} profile = {this.props.profile}/>
        </div>
        )
    }
}

let mapStateToProps = () =>({
    profile:state.getData().ProfilePagePosts.profile
});

export default connect(mapStateToProps, {SetUserProfile})(Profile);