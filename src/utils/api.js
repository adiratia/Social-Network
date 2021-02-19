import axios from 'axios'

const host ='http://localhost:4200';

const  API =  {
    login: (email,pass,success) =>{
        axios.post('http://localhost:4200/api/users/login', {email:email,password:pass})
        .then(res => {
            success(res);
        });
   }
}

export default API;