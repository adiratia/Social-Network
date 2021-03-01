import react,{Component} from 'react';
import {BrowserRouter as Router ,Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

//Pages
import Login from './components/Pages/login'
import LoginWrapper from './components/LoginWrapper'

//Admin Pages
import AdminWrapper from './components/AdminWrapper'
import Dashboard from './components/Pages/Admin/Dashboard'
import Users from './components/Pages/Admin/User';
import Posts from './components/Pages/Admin/Posts';
import AddPost from './components/Pages/Admin/AddPost';


class App extends Component {
  render(){

    return (
      <Router>
        <Route 
          path ='/admin/users'
          render = {props =>{
            console.log("Props",props);
            return (
              <div>
              {this.props.auth.token ?
              <AdminWrapper>
              <Users/>
              </AdminWrapper>
              :
              <LoginWrapper>
              <Login/>
              </LoginWrapper>
            }
            </div>

            )
          }}       
           />
        <Route 
          path ='/admin/posts/:view/:id'
          exact ={true}
          render = {props =>{
            console.log("Props",props);
            return (
              <div>
              {this.props.auth.token ?
              <AdminWrapper>
              <AddPost/>
              </AdminWrapper>
              :
              <LoginWrapper>
              <Login/>
              </LoginWrapper>
            }
            </div>

            )
          }}       
           />
        <Route 
          path ='/admin/posts/:view'
          exact ={true}
          render = {props =>{
            console.log("Props",props);
            return (
              <div>
              {this.props.auth.token ?
              <AdminWrapper>
              <AddPost/>
              </AdminWrapper>
              :
              <LoginWrapper>
              <Login/>
              </LoginWrapper>
            }
            </div>

            )
          }}       
           />
        <Route 
          path ='/admin/posts'
          exact ={true}
          render = {props =>{
            console.log("Props",props);
            return (
              <div>
              {this.props.auth.token ?
              <AdminWrapper>
              <Posts/>
              </AdminWrapper>
              :
              <LoginWrapper>
              <Login/>
              </LoginWrapper>
            }
            </div>

            )
          }}        
          />

        <Route 
          exact = {true}
          path='/admin'
          render = {props =>{
            console.log("Props",props);
            return (
              <div>
              {this.props.auth.token ?
              <AdminWrapper>
              <Dashboard/>
              </AdminWrapper>
              :
              <LoginWrapper>
              <Login/>
              </LoginWrapper>
            }
            </div>

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
