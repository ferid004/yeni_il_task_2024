import React, {  createContext, useState } from 'react'

export const  AuthContex=createContext()

function AuthProvider({children}) {
    const [username, setUsername] = useState(null)
    const [role, setRoler] = useState(null)
  return (
    <AuthContex.Provider value={{username,setUsername,role,setRoler}}>{children}</AuthContex.Provider>
  )
}

export default AuthProvider