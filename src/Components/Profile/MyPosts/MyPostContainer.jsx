import React from "react";
import {actionAddNewPostElement, actionAddPost} from "../../../Redux/PostsReducer";
import MyPosts from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        Data_of_Posts: state.ProfilePagePosts.Data_of_Posts,
        NewPostText : state.ProfilePagePosts.NewPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: ()=> {
            dispatch(actionAddPost())
        },
        onPostChange: (Text)=>{
            dispatch(actionAddNewPostElement(Text))
        }

    }
}

const MyPostsContainer  = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer