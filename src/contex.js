import React, { createContext, useState } from 'react'

const UserContex= createContext()

  

export  function ContexProvider({children}) {
    const [user,setUser]=useState({})
    const [cities,setCities]=useState([])
    const [history,setHistory]=useState([]);
    const [city,setCity]=useState({})
    const [selectedSoldiers,setselectedSoldiers]=useState([]);
    
  const getDefulteValue=()=>{
   setCity(cities.find((obj)=>obj.city==="Jerusalem"));
  }

  const getValue=(object)=>{
    return object[getKey(object)]
 }
 const getKey=(object)=>{
  return getKeys(object)[0];
 }

 const getKeys=(object)=>{
  return Object.keys(object)
 }

   const History=(item)=>{
    let historyTemp=history;
    historyTemp.push(item);
    if (historyTemp.length>5) {
      historyTemp.shift();
    }
    setHistory(historyTemp)}
    
  return (
    <UserContex.Provider value={{user,setUser,cities,setCities,history,setHistory,city,setCity,History,getDefulteValue,getValue,getKey,getKeys,selectedSoldiers,setselectedSoldiers}}>
        {children}
    </UserContex.Provider>
  )

}

  export default UserContex;