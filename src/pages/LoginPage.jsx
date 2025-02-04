import React from 'react'
import LoginForm from '../component/LoginForm'
import { Link ,useNavigate} from 'react-router-dom'
import {auth,signInWithEmailAndPassword} from '../Authentication/firebase'
import '../App.css'
const LoginPage = () => {
  const navigate = useNavigate(); 
  const login =(value)=>{
    signInWithEmailAndPassword(auth, value.email,value.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.alert("User Login SucessFully")
      navigate('/postready');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  return (
    <div className="container">  <div className="box">
    <div> <br />
       <div>
        <h1 className='font-serif font-bold text-[10em -#0095ff] '>Login here</h1>
       </div> <br />
       <LoginForm login={login}/>
       <p className='font-serif ' >Don't have an account? <Link to={'/register'}>Register here</Link></p>
      
    </div>
    </div></div>
  )
}

export default LoginPage