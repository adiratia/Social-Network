import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions'


class Dashboard extends Component{

    render(){

        return(
            <h1>Welocme to my social network</h1>

        )

    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        admin: state.admin
    }
}  

const mapDiaptchToProps = dispatch =>{
    return {
        getPosts:(token) =>{
            dispatch(AdminActions.getPosts(token));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDiaptchToProps

)(withRouter(Dashboard));
  