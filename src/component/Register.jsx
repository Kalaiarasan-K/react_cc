import React from 'react'
import './Register.css'
import {useState} from 'react'
import { FaUserCircle, FaLock,FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitHandler = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch("http://localhost:3000/users", {
            method:'POST',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          if(response.ok) {
            console.log("Success")
            alert("success")
          }
        } catch (error) {
          console.log(error)
        }
        navigate("/");
      }
  return (
      <div className='wrapper'>
        <form onSubmit={submitHandler}>
            <h1><center>Register</center></h1>
            <div className="input-box">
                <input type="text" name='username' placeholder='Username' onChange={handleInputChange} value={FormData.username} required />
                <FaUserCircle className='icon'/>
            </div>
            <div className="input-box">
                <input type="email" name='email' placeholder='Email' onChange={handleInputChange} value={FormData.email} required />
                <FaEnvelope className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" name='password' placeholder='Password' onChange={handleInputChange} value={FormData.password} required />
                <FaLock className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" name='confirmpassword' placeholder='Confirm password' onChange={handleInputChange} value={FormData.confirmPassword} required />
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
            </div>
            <center><button type='submit'>Register</button></center>
            <Link to={'/'}>
            <div className='flex justify-between pt-5'>
                <p>Already have an account? </p>
                    <a href="#">Home</a>
            </div>
            </Link>
        </form>
    </div>
  )
}

export default Register
