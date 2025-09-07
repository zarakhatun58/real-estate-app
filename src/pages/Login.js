import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';
import authBanner from "../assets/auth-banner.png";
import emailIcon from "../assets/email-icon.png";
import eyeIcon from "../assets/password-eye.png";
import lineIcon from "../assets/hr-line.png";
import apple from "../assets/apple-icon.png";
import google from "../assets/google-icon.png";
import facebook from "../assets/facebook-icon.png";

export default function Login(){
  const [email,setEmail]=useState(''); 
  const [password,setPassword]=useState('');
   const [error,setError]=useState(''); 
   const [loading,setLoading]=useState(false);
  const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

  const submit = async (e)=>{
    e.preventDefault(); setError(''); setLoading(true);
    try{ await signInWithEmailAndPassword(auth,email,password);
      alert('Login successful! 🎉');
       navigate('/');
       }
       catch(err){ setError(err.message); }
       finally{ setLoading(false); }
  };

  return (
    <div className="auth-wrap">
      <div className='main-part'>
        <form className="form-card" onSubmit={submit}>
          <h2>Log In</h2>
          {error && <p className="error">{error}</p>}
          
          <label>Email address<div className="input-wrapper">
            <input
              type="email"
              className="account-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Enter Your Email Id"
            />
            <img src={emailIcon} alt="email" className="input-icon" />
          </div></label>
          <label>
            Password
            <div className="input-wrapper">
              <input
                type="password"
                className="account-input"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Enter Your Password"
              />
              <img src={eyeIcon} alt="toggle password" className="input-icon" />
            </div>
          </label>
          <div className='reset-password-box'>
            <div className='remember-part'> 
              <input type="checkbox" value="lsRememberMe" id="rememberMe" className='check-box' />
               <p className='remeber-text'>Remember me</p></div>
            <div>
              <p className='forgot-text'>Forgot Password?</p>
            </div>
          </div>

          <button disabled={loading} className='create-button'>  {loading ? 'Logging in...' : 'Log In'}</button>
          
        </form>
        <div className='border-part'>
          <img src={lineIcon} alt="line" className='continue-border' />
          <div><p className='or-text'>OR CONTINUE WITH</p></div>
          <img src={lineIcon} alt="line" className='continue-border' />
        </div>
        <div className='social-part'>
          <img src={apple} alt="" />
          <img src={facebook} alt="" />
          <img src={google} alt="" />
        </div>
        <p className="muted">Doesn’t have an account?  <Link to="/signup" className='login-text'>Create One</Link></p>
      </div>
      <div className='auth-banner'>
        <img src={authBanner} alt="auth" />
      </div>
    </div>
  );
}
