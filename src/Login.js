import React ,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'
function Login(){
    const histroy=useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            histroy.push("/add")
        }
    },[])
    return(
        <div>
            <Header/>
            <h1>Login Page</h1>
        </div>
    )
        
}
export default Login