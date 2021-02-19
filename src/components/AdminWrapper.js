import react,{Component} from 'react'
import {defaultCipherList} from 'constants'
import "./assets/admin.css";


class AdminWrapper extends Component{

    render(){

        return (
            <div id="admin-page">
                {this.props.children}
            </div>

        )

    }
}

export default AdminWrapper;