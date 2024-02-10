import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import validation from './Signupvalidation';
import axios from  'axios'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    contact: '',
    age: '',
    dob: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.values)
    setErrors(validation(values));
    if(errors.name === "" && errors.contact === "" && errors.age === "" && errors.dob === "" && errors.email === "" && errors.password === "" )
    {
      axios.post('http://localhost:8080/signup',values)
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err))
    }
  };

  return (
    <div className='signup'>
      <form action='' onSubmit={handleSubmit}>
      <h1>SignUp Page</h1>
        <div className='signup-inside'>
          <label htmlFor='name'>Name : </label>
          <input type='text' onChange={handleInput} placeholder='enter name' name='name' />
          <span>{errors.name && <span>{errors.name}</span>}</span>
        </div>
        <div className='signup-inside'>
          <label htmlFor='Contact'>Contact Number: </label>
          <input type='text' onChange={handleInput} placeholder='enter Contact number' name='contact' />
          <span>{errors.contact && <span>{errors.contact}</span>}</span>
        </div>
        <div className='signup-inside'>
          <label htmlFor='age'>Age : </label>
          <input type='text' onChange={handleInput} placeholder='enter age' name='age' />
          <span>{errors.age && <span>{errors.age}</span>}</span>
        </div>
        <div className='signup-inside'>
          <label htmlFor='date'>Date of Birth : </label>
          <input type='text' onChange={handleInput} placeholder='enter date of birth' name='dob' />
          <span>{errors.dob && <span>{errors.dob}</span>}</span>
        </div>
        <div className='signup-inside'>
          <label htmlFor='email'>Email : </label>
          <input type='email' onChange={handleInput} placeholder='enter email' name='email' />
          <span>{errors.email && <span>{errors.email}</span>}</span>
        </div>
        <div className='signup-inside'>
          <label htmlFor='password'>Password : </label>
          <input type='password' onChange={handleInput} placeholder='enter email' name='password' />
          <span>{errors.password && <span>{errors.password}</span>}</span>
        </div>
        <div className='bt'>
        <button type='submit' className='btn'>Register</button>
        </div>
        <p>You are agree to our terms and policies</p>
        <Link to='/'>
        <button type='button' className='btn'>Login</button>
      </Link>
      </form>
      
    </div>
  );
};

export default Signup;
