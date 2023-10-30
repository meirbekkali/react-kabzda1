import {type} from "@testing-library/user-event/dist/type";

//Const for types in  createActions
const ADD_POST = 'ADD-POST'
const NEW_POST_SYMBOLS='NEW-POST-SYMBOLS'
const NEW_MESSAGE_ADD = 'NEW-MESSAGE-ADD'
const NEW_MESSAGE_SYMBOLS_ADD = 'NEW-MESSAGE-SYMBOLS-ADD'

// createActions for operating state
export const actionAddPost = (Text)=>{
    return {
        type: ADD_POST,
        Symbols: Text}
}
export const actionAddNewPostElement = (Text)=>{
    return {
        type:NEW_POST_SYMBOLS, Symbols:Text
    }

}
export const actionNewMessageAdd=(messageText)=>{
    return {
        type:NEW_MESSAGE_ADD, message: messageText
    }
}
export const actionNewSymbolAdd = (messageText)=> {
    return {
        type:NEW_MESSAGE_SYMBOLS_ADD, Symbols:messageText
    }
}


// State is here
let store= {
        _Data: {
            DialogsPageUsers:
                {
                    DataOfUsersName: [
                        {id: '1', message: 'User1'},
                        {id: '2', message: 'User2'},
                        {id: '3', message: 'User3'},
                        {id: '4', message: 'User4'},
                        {id: '5', message: 'User5'},
                    ]
                },
            ProfilePagePosts: {
                Data_of_Posts: [],
                NewPostText: 'it-kamasutra.com'
            },

            DialogsPageMessages:
                {
                    Data_of_messages: [
                        {id: '1', message: 'Hello!'},
                        {id: '1', message: 'Today is a good day!!'},
                        {id: '1', message: 'Today is rainy!'},
                        {id: '1', message: 'Today is sunny!!'},
                        {id: '1', message: 'How do you do?!'}
                    ],
                    newMessageText: 'Введите текст'
                }


        },
        _callSubscribe(){
            console.log('state changed')
        },
        subscribe (observer){
            this._callSubscribe=observer;
        },
        getData() {
            return this._Data
        },

        dispatch (action){

            //Добавление поста
            if (action.type==='ADD-POST'){
                this._Data.NewPostElement = {
                    id: 5,
                    text: action.Symbols
                }
                this._Data.ProfilePagePosts.Data_of_Posts.push(this._Data.NewPostElement)
                this._callSubscribe(this._Data);

            //Посимвольное записывание текста поста в State (_Data)
            } else if (action.type==='NEW-POST-SYMBOLS'){
                this._Data.ProfilePagePosts.NewPostText = action.Symbols;
                this._callSubscribe(this._Data);

            //Добавление нового сообщения в Dialogs
            } else if (action.type==='NEW-MESSAGE-ADD'){
                let messageItem = {id:'5',
                    message:action.message
                }
                this._Data.DialogsPageMessages.Data_of_messages.push(messageItem);
                this._callSubscribe(this._Data);

                //Посимвольное записывание текста сообщения в State (_Data)
            } else if (action.type=== 'NEW-MESSAGE-SYMBOLS-ADD'){
                this._Data.DialogsPageMessages.newMessageText = action.Symbols;
                this._callSubscribe(this._Data);
            }
             },


        /*addPost(Symbols) {
            this._Data.NewPostElement = {
                id: 5,
                text: Symbols
            }
            this._Data.ProfilePagePosts.Data_of_Posts.push(this._Data.NewPostElement)
            this._callSubscribe(this._Data);
        },
        NewPostSymbols (Symbols) {
            this._Data.ProfilePagePosts.NewPostText = Symbols;
            this._callSubscribe(this._Data);
        },
        newMessageAdd  (message){
            let messageItem = {id:'5',
                message:message
            }
            this._Data.DialogsPageMessages.Data_of_messages.push(messageItem);
            this._callSubscribe(this._Data);
        },
        NewMessageSymbolsAdd  (Symbols) {
            this._Data.DialogsPageMessages.newMessageText = Symbols;
            this._callSubscribe(this._Data);
        }*/

    }







/*export let AddPost = (Symbols)=>{
    let NewPostElement ={
        id: 5,
        text:Symbols
    };
    Data.ProfilePagePosts.Data_of_Posts.push(NewPostElement)
    rerenderEntireTree(Data);
    }*/

/*export const subscribe=(observer)=>{
    rerenderEntireTree=observer;
}*/


/*export let NewPostSymbols = (Symbols)=> {
    Data.ProfilePagePosts.NewPostText = Symbols;
    rerenderEntireTree(Data);
}*/

/*
export let newMessageAdd = (message)=>{
    let messageItem = {id:'5',
        message:message
    }
    Data.DialogsPageMessages.Data_of_messages.push(messageItem);
    rerenderEntireTree(Data);
}
*/

/*export let NewMessageSymbolsAdd = (Symbols)=> {
    Data.DialogsPageMessages.newMessageText = Symbols;
    rerenderEntireTree(Data);
}*/






export default store