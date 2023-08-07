import React, { createContext, useState } from 'react'

const UserContex= createContext()


export  function ContexProvider({children}) {
    const [user,setUser]=useState({})
    const [cities,setCities]=useState([])
    const [history,setHistory]=useState([]);
  return (
    <UserContex.Provider value={{user,setUser,cities,setCities,history,setHistory}}>
        {children}
    </UserContex.Provider>
  )

}

  export default UserContex;