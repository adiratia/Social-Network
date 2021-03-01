import API from '../../utils/api';

export const login =(email,password) =>{
    return (dispatch)=> {
        
        API.login(email,password,res =>{
            console.log("Result",res.data);
            dispatch( {
                type: 'LOGIN',
                payload : {
                    email: email,
                    token: res.data.id,
                    userId : res.data.userId    
                }
            })
        })
    }

}

export const register =(name,email,password) =>{
    return (dispatch)=> {
        
        API.register(name,email,password,res =>{
            console.log("Result",res.data);
            dispatch( {
                type: 'REGISTER',
                payload : {
                    email: email,
                    token: res.data.id,
                    userId : res.data.userId    
                }
            })
        })
    }

}