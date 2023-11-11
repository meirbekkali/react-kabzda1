import {combineReducers, configureStore, legacy_createStore} from "redux";
import {postsReducer}  from './PostsReducer';
import {DialogsPageReducer}   from './DialogsReducer';


let reducers = combineReducers({
    ProfilePagePosts:postsReducer,
    DialogsState:DialogsPageReducer,

})


let store=legacy_createStore(reducers)


export default store;