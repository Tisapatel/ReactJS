import React, { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [isLoding,setIsLoding] = useState(false);

  return (
    <UserContext.Provider value={{user,setUser,isLoding,setIsLoding}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider