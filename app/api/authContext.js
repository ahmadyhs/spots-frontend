'use client'

import { createContext, useEffect, useState } from "react";

const AuthContext = createContext ({
  user: null,
  token: null,
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  
  return(
    <AuthContext.Provider value={{user, setUser, token, setToken}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext;