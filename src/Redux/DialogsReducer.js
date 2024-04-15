const NEW_MESSAGE_ADD = 'NEW-MESSAGE-ADD'
const NEW_MESSAGE_SYMBOLS_ADD = 'NEW-MESSAGE-SYMBOLS-ADD'



//Назначение стэйта
let stateData = {
    DialogsState:{
    DialogsPageUsers: {
        DataOfUsersName: [
            { id: '1', message: 'User1' },
            { id: '2', message: 'User2' },
            { id: '3', message: 'User3' },
            { id: '4', message: 'User4' },
            { id: '5', message: 'User5' },
        ]
    },
    DialogsPageMessages: {
        Data_of_messages: [
            {id: '1', message: 'Hello!'},
            {id: '1', message: 'Today is a good day!!'},
            {id: '1', message: 'Today is rainy!'},
            {id: '1', message: 'Today is sunny!!'},
            {id: '1', message: 'How do you do?!'}
        ],
        NewMessageText:
            'Введите текст'
    }}
}




//Добавление нового сообщения в Dialogs
export let DialogsPageReducer = (state = stateData,action)=> {






//Добавление сообщения
    switch (action.type){
        case'NEW-MESSAGE-ADD':
            return {
                ...state,
                DialogsState: {
                    ...state.DialogsState,
                    DialogsPageMessages: {
                        ...state.DialogsState.DialogsPageMessages,
                        Data_of_messages: [
                            ...state.DialogsState.DialogsPageMessages.Data_of_messages,
                            {
                                id: '5',
                                message: action.message
                            }
                            ],
                        NewMessageText:''
                    }
                }
            };


    //Посимвольное записывание текста сообщения в State (_Data)
        case 'NEW-MESSAGE-SYMBOLS-ADD':
            return {
                ...state,
                DialogsState: {
                    ...state.DialogsState,
                    DialogsPageMessages:{
                        ...state.DialogsState.DialogsPageMessages,
                        NewMessageText: action.Symbols,

                    }
                }

            };


        default:
            return state;
}
}


//Action с редюсером  добавление сообщения
export const actionNewMessageAdd = (messageText) => {
    return {
        type: NEW_MESSAGE_ADD, message: messageText
    }
}
//Action с редюсером посимвольное добавление сообщения
export const actionNewSymbolAdd = (messageText) => {
    return {
        type: NEW_MESSAGE_SYMBOLS_ADD,
        Symbols: messageText
    }};


