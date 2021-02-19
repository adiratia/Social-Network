import react,{Component} from 'react';
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

//Pages
import Login from './components/Pages/login'
import AdminWrapper from './components/AdminWrapper'
import Dashboard from './components/Pages/Dashboard'
class App extends Component {
  render(){

    return (
      <Router>
        <Route 
        path='/admin'
        render = {props =>{
          console.log("Props",props);
          return (
            <AdminWrapper>
            {this.props.auth.token ?
            <Dashboard/>
            :
            <Login/>
          }
          </AdminWrapper>
          )
        }}
         />
      </Router>

    )
  }
}

const mapStateToProps =state =>{
  return {
    auth: state.auth
  }
}
const mapDiaptchToProps =dispatch =>{
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDiaptchToProps
)(App);
