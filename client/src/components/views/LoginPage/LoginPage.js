import React, { useState } from 'react'

function LoginPage() {

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
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{ display: 'flex', flexDirection: 'column'}}
            onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />
        <lable>Password</lable>
        <input type="password" value={password} onChange={onPasswordHandler} />
        <br/>
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage