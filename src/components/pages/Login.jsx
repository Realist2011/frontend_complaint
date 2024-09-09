import React, { useState } from 'react'


const Login = () => {
  const [cpf_no,setCpf_no]=useState("")
  const [password,setPassword]=useState("")
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(cpf_no,password)
  }
  return (
   <form onSubmit={handleSubmit} >
    <div>
        <input type='text' value={cpf_no} onChange={(e)=>{setCpf_no(e.target.value)}}  placeholder='cpf_no'></input>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password'></input>
        <button className='' >Login</button>
    </div>
   </form>
    
  )
}

export default Login