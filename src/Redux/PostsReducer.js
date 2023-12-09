//Const for types in  createActions

import profile from "../Components/Profile/Profile";

const ADD_POST = 'ADD-POST'
const NEW_POST_SYMBOLS = 'NEW-POST-SYMBOLS'
const SET_USER_PROFILE = 'SET-USER-PROFILE'


let stateData = {
    ProfilePagePosts: {
        Data_of_Posts: [],
        NewPostText:
            'it-kamasutra.com',
        profile:null
    }
}

export let postsReducer = (state = stateData.ProfilePagePosts, action) => {


    let stateCopy = {...state}
    stateCopy.Data_of_Posts = [...state.Data_of_Posts]
    stateCopy.NewPostText = state.NewPostText

    switch (action.type) {


        //Reducer Добавление нового поста 
        case 'ADD-POST':
            return {
                ...state,
                Data_of_Posts: [
                    ...state.Data_of_Posts,
                    {id: 5, text: state.NewPostText}
                ],
                NewPostText: ''
            };
        //Reducer Посимвольное записывание текста поста в State (_Data)
        case 'NEW-POST-SYMBOLS':
            return {
                ...state,
                NewPostText: action.Symbols
            };
        case 'SET-USER-PROFILE':
            return{...state,profile:action.profile}
        default:
            return state;

    }
}

//Action с редюсерем добавление поста
export const actionAddPost = () => {
    return {
        type: ADD_POST
    }
}

//Action с редюсером посимвольное записывание в посты
export const actionAddNewPostElement = (Text) => {
    return {
        type: NEW_POST_SYMBOLS,
        Symbols: Text,
    }
}

export const SetUserProfile = (profile) =>({ type:SET_USER_PROFILE,profile})

