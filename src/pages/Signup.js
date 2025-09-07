import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';
import authBanner from "../assets/auth-banner.png";
import emailIcon from "../assets/email-icon.png";
import eyeIcon from "../assets/password-eye.png";

export default function Signup() {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const submit = async (e) => {
    e.preventDefault(); setError('');
    if (password !== confirm) { setError('Passwords do not match'); return; }
    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (name) await updateProfile(cred.user, { displayName: name });
       alert('Account created successfully! Please log in.');
      navigate('/login');
    } catch (err) { setError(err.message); } finally { setLoading(false); }
  };

  return (
    <div className="auth-wrap">
      <div className='main-part'>
        <form className="form-card" onSubmit={submit}>
          <h2>Create new account</h2>
          {error && <p className="error">{error}</p>}
          <label>Name<input value={name} className='auth-input' onChange={e => setName(e.target.value)} required placeholder='Enter Your Full Name ' /></label>
          <label>Email<div className="input-wrapper">
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
                type={showPassword ? "text" : "password"}
                className="account-input"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="Enter Your Password"
              />
              <img src={eyeIcon} alt="toggle password" className="input-icon"  onClick={() => setShowPassword(!showPassword)} />
            </div>
          </label>

          <label>
            Confirm Password
            <div className="input-wrapper">
              <input
                type={showConfirm ? "text" : "password"}
                className="account-input"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
                placeholder="Confirm Your Password"
              />
              <img src={eyeIcon} alt="toggle confirm password" className="input-icon"  onClick={() => setShowConfirm(!showConfirm)}/>
            </div>
          </label>

          <button disabled={loading} className='create-button'>{loading ? 'Creating...' : 'Create account'}</button>
          <p className="muted">Already Have an account? <Link to="/login" className='login-text'>Log in</Link></p>
        </form>
      </div>
      <div className='auth-banner'>
        <img src={authBanner} alt="auth" />
      </div>
    </div>
  );
}
