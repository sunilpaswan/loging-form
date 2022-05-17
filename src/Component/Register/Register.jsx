import React, { useState } from 'react'
import './Register.scss'
import IMG from '../Image/img.png';

function Register() {
  
 

  const[email,setemail]=useState('');
  const[pwd1,setpwd1]=useState('');
  const[pwd2,setpwd2]=useState('');
  const[username,setusername]=useState('');
  const[phonenumber,setphonenumber]=useState('');

  const handlesubmit=(event)=>{
    event.preventDefault()
  }
 
  return (
    
    <div className='main-loging'>
      <div className='loging-contain'>
        
        <div className='left__side'>
          <img className='img' src={IMG} alt=""/>
          <h3>choose a data range</h3>
          <p style={{fontSize: '10px', color: 'gray'}}>Provides extra visual weigh<br/>
          Contextual button for informational alert</p>

        </div>
        <div className='right__side'>
          <form onSubmit={handlesubmit}>
            <h1 id='main'>Create an account</h1>
            <label form='email'>Your Email address</label>
            <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} id='email'/>
            <label form='email'>Your password</label>
            <input type="password" value={pwd1} onCanPlay={(e)=>{setpwd1(e.target.value)}} id='pwd1'/>
            <label form='email'>Your Confirm your password</label>
            <input type="password" value={pwd2} onChange={(e)=>{setpwd2(e.target.value)}} id='pwd2'/>
            <label form='email'>Your full name </label>
            <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} id='username'/>
            <label form='email'>Your phone number </label>
            <input type="number" value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}} id='phonenumber'/>
            <input className='check__box' type="checkbox" name="terms" id="terms" onchange="activateButton(this)"/> 
            <span id='txt2'> I read and Agree Terms & Coditions</span><br/>
             <button type="submit" id='sub__btn'>Create account</button>
          </form>

        </div>
      </div>
    </div>
    
  )
}

export default Register