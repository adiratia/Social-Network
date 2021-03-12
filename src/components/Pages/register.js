import react,{Component} from 'react'
import Field from '../Common/Field'
import {withFormik} from 'formik'
import { connect } from 'react-redux'
import * as Yup from 'yup'
import * as AuthActions from '../../store/actions/authActions'
import { Button } from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

const fields =[
    {name: 'name' , elementName : 'input' , type : 'string', placeholder:'Your Name'},
    {name: 'email' , elementName : 'input' , type : 'email', placeholder:'Your email'},
    {name: 'password' , elementName : 'input' , type : 'password', placeholder:'Your Password'},
    {name: 'password2' , elementName : 'input' , type : 'password', placeholder:'Your Password Again'}

]

class Register extends Component{

    render(){

        return (
            <div  className ="login-page" >
                <div className = "containter" >
                    <div className = "login-form">
                         <div className= "row">
                             <h1>Register</h1>
                         </div>
                        <div className= "row">
                            <form >
                            {fields.map((f,i)=>{
                            return(
                                <div className = "col-md-12" key={i}>                                
                                    <Field
                                    {...f}
                                    value={this.props.values[f.name]}
                                    name={f.name}
                                    onChange={this.props.handleChange}
                                    onBlur = {this.props.handleBlur}
                                    touched = {this.props.touched[f.name]}
                                    errors = {this.props.errors[f.name]}
                                    />
                                </div>
                                )
                            })}
                            <div className = "col-md-12">
                                <Button
                                    variant="contained"
                                    color="secondary" 
                                    onClick = {e =>{
                                        e.preventDefault();
                                        this.props.register(this.props.values.name,this.props.values.email,this.props.values.password);
                                    }}>
                                    Register
                                </Button>
                            </div>

                            </form>
                          </div>
                    </div>
                </div>
            </div>        )
    }
}
const mapStateToProps = state =>{
    return {
        auth: state.auth
    }
}
const mapDispatchToProps =dispatch =>{
    return {
    register:(name,email, password)=>{
        dispatch(AuthActions.register(name,email,password));
    }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues : () =>({
        email : '',
        password : ''
    }),
    validationSchema: Yup.object().shape({
        email : Yup.string().email('Email is invalid. ').required('you need to login with email address'),
        password: Yup.string().required('You need to enter your password')
    })
})(Register));