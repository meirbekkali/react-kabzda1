//Const for types in  createActions

const ADD_POST = 'ADD-POST'
const NEW_POST_SYMBOLS = 'NEW-POST-SYMBOLS'


let stateData = {
    ProfilePagePosts: {
        Data_of_Posts: [],
        NewPostText:
            'it-kamasutra.com'
    }
}

export let postsReducer = (state = stateData.ProfilePagePosts, action) => {

    switch (action.type) {
        //Reducer Добавление нового поста 
        case 'ADD-POST':
             let NewPostElement = {
                id: 5,
                text: state.NewPostText
             };
            state.Data_of_Posts.push(NewPostElement)
            return state;

        //Reducer Посимвольное записывание текста поста в State (_Data)
        case 'NEW-POST-SYMBOLS':
            state.NewPostText = action.Symbols;
            return state;
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
};

