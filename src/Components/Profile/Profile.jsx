import React from "react";
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";





const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className="content">
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>
        </div>
    )
};

export default Profile;