import React from "react";
import classes from './Profile.module.css'
import axios from "axios";
import {connect} from "react-redux";
import {SetUserProfile} from "../../Redux/PostsReducer";
import Profile from "./Profile";
import store from "../../Redux/redux-store";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}






class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.router.params.userId;
        console.log(this.props.router)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.SetUserProfile(response.data);
            })
            .catch(error => {
                console.error('Error fetching user profile:', error);
            });
    }

    render (){

        return (
        <div className={classes.content}>
            <Profile {...this.props} profile = {this.props.profile}/>
        </div>
        )
    }
}

let mapStateToProps = () =>({
    profile:store.getState().ProfilePagePosts.profile
});





export default connect(mapStateToProps, {SetUserProfile})(withRouter(ProfileContainer));