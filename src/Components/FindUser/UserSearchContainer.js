import {connect} from "react-redux";

import {
    onFollow,
    setCurrentPage,
    SetState,
    onUnFollow,
    SetTotalUsersCount,
    ToggleIsFetching
}


from "../../Redux/UserSearchReducer";
import React from "react";
import axios from "axios";
import UserSearch from "./UserSearch";
import Preloader from "../Common/Preloader/Preloader";


class UserSearchAPIComponent extends React.Component {
    componentDidMount() {
        this.NewUsersState();
    }
    NewUsersState = () => {

        if (this.props.UsersState.length === 0) {
            this.props.ToggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.ToggleIsFetching(false);
                    this.props.SetState(response.data.items)
                    this.props.SetTotalUsersCount(response.data.totalCount)
                })

        }
    }
    onPageChange=(pageNumber)=>{this.props.setCurrentPage(pageNumber)
        this.props.ToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.ToggleIsFetching(false);
                this.props.SetState(response.data.items)
            })
    }
    render() {


        return ( <div>

        {this.props.isFetching? <Preloader/>:''}
        <UserSearch onPageChange ={this.onPageChange}
                           TotalUsersCount ={this.TotalUsersCount}
                           currentPage ={this.currentPage}
                           UsersState ={this.props.UsersState}
                           onUnFollow ={this.props.onUnFollow}
                           onFollow ={this.props.onFollow}/>
        </div>)

    }
}

let mapStateToProps =(state)=>{
    return {
        UsersState:state.UsersState.Users,
        PageSize:state.UsersState.pageSize,
        TotalUsersCount: state.UsersState.totalUsersCount,
        currentPage: state.UsersState.currentPage,
        SetTotalUsersCount:state.UsersState.SetTotalUsersCount,
        isFetching: state.UsersState.isFetching

    }
}



const UserSearchContainer =
    connect(mapStateToProps,
        {
        onFollow, onUnFollow, SetState, setCurrentPage, SetTotalUsersCount, ToggleIsFetching
        })(UserSearchAPIComponent)

export default UserSearchContainer