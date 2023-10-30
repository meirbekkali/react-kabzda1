import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className="content">
                <ProfileInfo/>
                <MyPosts
                    data = {props.data}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    )
};

export default Profile;