import React, { createContext, useState } from 'react'


export const StateContext = createContext();
const AuthProvider = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isUser, setIsUser] = useState(false);

    const [localName, setLocalName] = useState(window.localStorage.getItem("name")  )

  return (
    <StateContext.Provider value={{
      name, 
      setName, 
      email, 
      setEmail, 
      password, 
      setPassword, 
      confirmPassword, 
      setConfirmPassword, 
      }}>
        {props.children}
    </StateContext.Provider>
  )
}

export default AuthProvider