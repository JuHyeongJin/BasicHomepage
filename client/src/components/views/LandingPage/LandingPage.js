import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function LandingPage() {

  const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get('/api/users/logout')
    .then(navigate('/login'))
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  )
}

export default LandingPage