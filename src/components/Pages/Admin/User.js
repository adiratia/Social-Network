import React,{Component} from 'react';
import TableView from '../../Common/TableView';
import {connect} from 'react-redux';
import * as AdminActions from '../../../store/actions/adminActions'
import '../../../store/reducers/adminReducer';
import {withStyles} from '@material-ui/core/styles';


const columns =[
    {label : 'ID',  name: 'id'},
    {label : 'Email',  name: 'email'},
    {label : 'Name',  name: 'name'},
]
const styles = theme =>({

    header: {
        padding: '30px',
        textAlign: 'center',
        background: '#F0F8FF',
        color: 'black',
        fontSize: '30px'
    }
});


class Users extends Component{

    componentDidMount(){
        this.props.getUsers(this.props.auth.token);
    }

    render(){
        const users= this.props.admin.users;
        const {classes} =this.props;
        return(
            <div>
                <h1 className={classes.header}>Users</h1>
                <TableView
                    columns ={columns}
                    rows= {users}
                    />
            </div>
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
        getUsers:(token) =>{
            dispatch(AdminActions.getUsers(token));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDiaptchToProps

)(withStyles(styles)(Users));
