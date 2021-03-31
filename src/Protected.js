import React ,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from './Header'
function Protected(props){
    let Cmp=props.Cmp
    const histroy=useHistory();
    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            histroy.push("/register")
        }
    },[])
    return(
        <div>
            <Cmp/>
        </div>
    )
        
}
export default Protected