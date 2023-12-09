import Users from "./UserComponent";
import {connect} from "react-redux";


// let UsersContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let
//                     stateUsers = store.getState()
//                 let dataOfUsersName =
//                     stateUsers.DialogsState.DialogsState.DialogsPageUsers.DataOfUsersName
//                 return (
//
//                     < Users
//                         dataOfUsersName={dataOfUsersName}
//                     />
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }


let mapStateToProps = (state) => {
    return {
        dataOfUsersName: state.DialogsState.DialogsState.DialogsPageUsers.DataOfUsersName
    }
}

const UsersContainer = connect(mapStateToProps)(Users)
export default UsersContainer