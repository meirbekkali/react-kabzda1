import {connect} from "react-redux";
import {setUserData} from "../../Redux/authReducer";
import React from "react";
import Header from "./Header";
import axios from "axios";



class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {  withCredentials:true  }
        )
        .then(response =>
        { debugger;
            if (response.data.resultCode === 0)
            {
                let {id, email, login} = response.data.data;
                console.log({id, email, login})
                this.props.setUserData({id, email, login});
            }
        })
        .catch(error => {
            console.error('Error fetching user profile:', error);
        });
    }
    render() {
        return  <Header {...this.props}/>
    }
}

let mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.isAuth
})



export default  HeaderContainer = connect({setUserData})(HeaderContainer)

