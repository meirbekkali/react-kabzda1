import {combineReducers, configureStore, legacy_createStore} from "redux";
import {postsReducer}  from './PostsReducer';
import {DialogsPageReducer}   from './DialogsReducer';
import {userReducer} from "./UserSearchReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    ProfilePagePosts:postsReducer,
    DialogsState:DialogsPageReducer,
    UsersState:userReducer,
    auth:authReducer
});


let store=legacy_createStore(reducers);

window.store=store;
export default store;