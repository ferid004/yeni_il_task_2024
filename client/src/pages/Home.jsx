import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Outlet/>
        <h1 className="text-center">Welcome to our website!</h1>
    </div>
  )
}

export default Home