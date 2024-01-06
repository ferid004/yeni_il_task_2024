import React, { useState } from 'react'

function Register() {
  const [inpUsername, setInpUsername] = useState("")
  const [inpPassword, setInpPassword] = useState("")
  function handelRegister(e) {
    e.preventDefault();
    fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: inpUsername, password: inpPassword })
    })
    .then((res) => res.json())
    .then((res)=>console.log(res))
    .catch((err) => console.log(err)) 
  }
  return (
    <>
      <h1>Register</h1>
      <hr />
      <form onSubmit={handelRegister}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username"
          value={inpUsername} onChange={(e) => setInpUsername(e.target.value)} /><br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password"
          value={inpPassword} onChange={(e) => setInpPassword(e.target.value)} /><br />
        <button>Submit</button>
      </form>
      <hr />
    </>
  )
}

export default Register