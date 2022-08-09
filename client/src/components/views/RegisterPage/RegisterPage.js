import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../_actions/User_action'

function RegisterPage(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  }

  const onNameHandler = (event) => {
    setName(event.target.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(password !== confirmPassword){
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

    let body = {
      email: email,
      name: name,
      password: password,
    }

    dispatch(registerUser(body))
      .then(response => {
        if(response.payload.Success) {
          navigate('/login');
        } else (
          alert('Failed to sign up')
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

        <div>name</div>
        <input type="password" value={name} onChange={onNameHandler} />

        <div>Password</div>
        <input type="password" value={password} onChange={onPasswordHandler} />

        <div>Confirm Password</div>
        <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} />

        <br/>
        <button>회원가입</button>
      </form>
    </div>
  )
}

export default RegisterPage