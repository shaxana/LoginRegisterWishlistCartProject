import React, { useEffect } from 'react'
import { useState,useRef } from 'react'
import axios from 'axios'
import {
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'
  
  import { Button, ButtonGroup } from '@chakra-ui/react'
import Register from './Register'
import './../../Module.css'



function Login({login, setLogin,setCardProducts}) {
    
   const [logged, setLogged] = useState({name:'', pass:''})
  let {name, pass} = logged
 

   
  return (
   <>

    <FormControl>
  <FormLabel>Username</FormLabel>
  <Input type='text' value={name} id="username" onChange={(e) => setLogged({ ...logged, name: e.target.value })}/>
  
  <FormLabel>Password</FormLabel>
  <Input type='password' value={pass}  id='password' onChange={(e) => setLogged({ ...logged, pass: e.target.value })}/>
</FormControl>
<Button colorScheme='teal' variant='outline' style={{marginRight:10}} onClick={async ()=>{
 
  await axios.get("https://65561a2084b36e3a431f0b20.mockapi.io/users").then((res)=>{
    let users = res.data;
    let isLogged = users.find((user)=> user.name === name && user.password === pass)
    if (isLogged){
      setLogged({name:'', pass:''})
      setLogin(true)
      setCardProducts(true)
      console.log(login);
    }
  })

  
}}>
    Log in
  </Button>

  <Button colorScheme='teal' variant='outline' onClick={()=>{
    setLogin(false) 
  }}>
    Register
  </Button>
   </>

  )
}

export default Login