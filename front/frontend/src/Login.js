import React, { useState } from 'react'
import './Login.css'
import {Link,useNavigate} from 'react-router-dom'
import validation from './Loginvalidation'
import axios from  'axios'

const Login = () => {
    const navigate = useNavigate();
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const [errors,setErrors] = useState({})
    const handleInput =(event)=>{
        setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email === "" && errors.password === "")
    {
      axios.post('http://localhost:8080/login', values)
      .then(res => {
         if(res.data === "Success" )
         {
                navigate('/profile');
         }else{
            alert("no record existed");
         }
      })
      .catch(err => console.log(err))
    }
    }

    return (
        <div className='login'>
            <form action='' onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <div className='login-inside'>
                    <label htmlFor='email'>Email : </label>
                    <input type='email' onChange={handleInput} placeholder='Enter Email' name='email'/>
                    <span>{errors.email && <span>{errors.email}</span>}</span>

                </div>
                <div className='login-inside'>
                    <label htmlFor='password'>Password : </label>
                    <input type='password' onChange={handleInput} placeholder='Enter Password' name='password'/>
                    <span>{errors.password && <span> {errors.password}</span>}</span>
                </div>
                <div className='bt'>
                <button type='submit' className='btn' >Login</button>
                </div>
                <div className='bt'>
                <p> You are agree to our terms and policies</p>
                </div>
                <div className='bt'>
                <Link to='/signup'><button className='btn'>Register</button></Link>
                </div>
                
            </form>
        </div>
    )
}

export default Login
