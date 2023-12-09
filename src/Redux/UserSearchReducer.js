//Const for types in  createActions
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT= 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING= 'TOGGLE_IS_FETCHING'

let stateData = {
    Users:[],
    pageSize:5,
    totalUsersCount:20,
    currentPage:2,
    isFetching:false
}


export const userReducer = (state = stateData, action) => {
    console.log('Current State:', state);

    switch (action.type) {
        case FOLLOW:
            const newStateFollow = {
                Users: state.Users.map(e => {
                    if (e.id === action.UserID)
                        {return { ...e, followed: true }}
                    else
                        {return e}
                }),
            };
            console.log('New State (Follow):', newStateFollow);
             return newStateFollow;

        case UNFOLLOW:
            const newStateUnfollow = {
                ...state,
                Users: state.Users.map(e => {
                    if (e.id === action.UserID)
                        {return { ...e, followed: false }}
                    else
                        {return e}
                }),
            };
            console.log('New State (Unfollow):', newStateUnfollow);
            return newStateUnfollow;
        case   SET_USERS:{
            return {
                ...state,
                Users:action.NewState
            }

        }
        case   SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage: action.currentPage}
        }

        case   SET_TOTAL_USERS_COUNT:{
            return {
                ...state,
                totalUsersCount: action.totalCount}
        }
        case   TOGGLE_IS_FETCHING:{
            return {
                ...state,
                isFetching: action.isFetching}
        }
        default:
            return state;
    }
};

export const onFollow = (UserID) => ({type: FOLLOW, UserID})
export const onUnFollow = (UserID) => ({type: UNFOLLOW, UserID})
export const SetState = (NewState) =>({type:SET_USERS, NewState})

export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE,currentPage })

export const SetTotalUsersCount = (totalCount) => ({type:SET_TOTAL_USERS_COUNT, totalCount})
export const ToggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})

