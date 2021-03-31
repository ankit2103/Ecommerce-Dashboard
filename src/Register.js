import React ,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'

function Register(){
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            histroy.push("/add")
        }
    },[])
   
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const histroy=useHistory();
    async function signup(){
        let item={name,email,password}
        console.warn(item)
        let result=await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result=await result.json()
        console.warn("result",result)
        localStorage.setItem("user-info",JSON.stringify(result))
        histroy.push("/add")
    
    }
    return(
        <> 
            <Header/>
            <div className="col-sm-6 offset-3">
                <h1>Register Page</h1>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Your Name"></input><br/>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" placeholder="Enter Your Email"></input><br/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter Your Password"></input><br/>
                <button onClick={signup} className="btn btn-success">Register</button>
            </div>
        </>
    )
        
}
export default Register