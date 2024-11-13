import React from 'react'
import {useState} from 'react'
import { FaUserCircle, FaLock,FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:3000/users');
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const users = await response.json();

            const user = users.find(user => user.email == email);

            if(user){
                if(user.password === password) {
                    navigate('/home');
                } else {
                    setErrorMessage('Invalid password');
                }
            } else {
                setErrorMessage('You need to register');
                alert('Sorry you need to register');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setErrorMessage('Failed to fetch user data');
        }
    }
  return (
    <div className='wrapper'>
        <form onSubmit={handleLogin}>
            <h1><center>Login</center></h1>
            <div className="input-box">
                <input type="email" name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} required />
                <FaEnvelope className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required />
                <FaLock className='icon'/>
            </div>
            <center><button type='submit'>Login</button></center>
            {errorMessage && <p>{errorMessage}</p>}

            <Link to={'./register'}>
            <div className='flex justify-between pt-5'>
                <p>Not have an account? </p>
                    <a href="#">Register</a>
            </div>
            </Link>
        </form>
    </div>
  )
}

export default Login;
