import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";




const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div className="content">
                <ProfileInfo/>
                <MyPostsContainer

                />
            </div>
        </div>
    )
};

export default Profile;