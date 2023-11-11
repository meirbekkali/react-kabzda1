import {postsReducer} from './PostsReducer';
import {DialogsPageReducer}  from './DialogsReducer';




// createActions for operating state


// State is here
let store = {
    _Data: {
        DialogsPageUsers: {
            DataOfUsersName: [
                { id: '1', message: 'User1' },
                { id: '2', message: 'User2' },
                { id: '3', message: 'User3' },
                { id: '4', message: 'User4' },
                { id: '5', message: 'User5' },
            ]
        },
        ProfilePagePosts: {
            Data_of_Posts: [],
            NewPostText: 'it-kamasutra.com'
        },
        DialogsPageMessages: {
            Data_of_messages: [
                { id: '1', message: 'Hello!' },
                { id: '1', message: 'Today is a good day!!' },
                { id: '1', message: 'Today is rainy!' },
                { id: '1', message: 'Today is sunny!!' },
                { id: '1', message: 'How do you do?!' }
            ],
            NewMessageText: 'Введите текст'
        }
    },

    //Rendering page
    _callSubscribe() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },



    getData() {
        return this._Data
    },




    //actions contains here


    dispatch(action) {
        this._Data.ProfilePagePosts = postsReducer(this._Data.ProfilePagePosts, action);

        this._Data.DialogsPageMessages = DialogsPageReducer(this._Data.DialogsPageMessages, action);

       
       this._callSubscribe(this._Data);
       window.opaopa = this._Data;
}
}


export default store