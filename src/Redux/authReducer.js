//Const for types in  createActions
const SET_USER_DATA = 'SET_USER_DATA'


let stateData = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}


const authReducer = (state = stateData, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            console.log(action.data)
             return {
                 ...state,
                 ...action.data,
                 isAuth: true
             };
        default:
            return state;
    }
};

export const setUserData = (id,email,login) => ({type: SET_USER_DATA, data:{id,email,login}});
export default authReducer;
