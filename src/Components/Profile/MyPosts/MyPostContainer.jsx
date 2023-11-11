import React from "react";
import {actionAddNewPostElement, actionAddPost} from "../../../Redux/PostsReducer";
import MyPosts from "./MyPost";
import store from "../../../Redux/redux-store";
import StoreContext from "../../../Context";



const MyPostsContainer = (props) => {
    let statePost = props.store.getState()
    let Data_of_Posts = store.getState().ProfilePagePosts.Data_of_Posts
    let NewPostText = store.getState().ProfilePagePosts.NewPostText


    let AddPost = () => {
        store.dispatch(actionAddPost());
    }

    let postElementAdd = (Text) => {
       store.dispatch(actionAddNewPostElement(Text));
        return (
            <StoreContext.Consumer>
                {
                    (store) =>
                        (
                            <MyPosts onPostChange={postElementAdd}
                                     addPost={AddPost}
                                     Data_of_Posts={store.getState().ProfilePagePosts.Data_of_Posts}
                                     NewPostText={store.getState().ProfilePagePosts.NewPostText}/>
                        )
                }
            </StoreContext.Consumer>
        );

    }
}

export default MyPostsContainer