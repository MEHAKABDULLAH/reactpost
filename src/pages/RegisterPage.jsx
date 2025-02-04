import React from 'react'
import RegisterForm from '../component/RegisterForm'
import { Link } from 'react-router-dom'
import {auth,getAuth,createUserWithEmailAndPassword} from '../Authentication/firebase'
import '../App.css'
const RegisterPage = () => {
  const register=(a)=>{
    createUserWithEmailAndPassword(auth, a.email, a.password)
    .then((userCredential) => {
 
      const user = userCredential.user;
      // console.log('user registered' ,user);
      window.alert("User Registered SucessFully")
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  
   
  }
  return (
    <div className="container">  <div className="box">
    <div>
      <div> <br />
        <h1 className='font-serif font-bold ' >Register</h1> <br />
      </div>
      <RegisterForm register={register}/>
      <p className='font-serif '>Already have an acount <Link to={'/'}>Login here</Link> </p>

    </div>  </div>  </div>
  )
}

export default RegisterPage