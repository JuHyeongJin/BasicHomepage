import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../_actions/User_action';

function LoginPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: email,
      password: password,
    }

    dispatch(loginUser(body))
      .then(response => {
        if(response.payload.loginSuccess) {
          navigate('/');
        } else (
          alert('Error')
        )
      })

    
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column'}}
            onSubmit={onSubmitHandler}>
        <div>Email</div>
        <input type="email" value={email} onChange={onEmailHandler} />
        <div>Password</div>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <br/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage