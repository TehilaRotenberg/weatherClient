import React, { useEffect, useState } from 'react'
import { apiMethod } from '../general/request'
import Soliders from './soliders'

export default function Mador() {

    useEffect(()=>{
        onload()
    },[])
    const [soliders,setSoliders]=useState([])
    const [openPopup,setOpenPopup]=useState(false)
    const onload=()=>{
    const headers=JSON.parse(localStorage.getItem("user"))
    getSoliders(headers)
    console.log("aaa");
    }

    const getSoliders=async (headers)=>{
        try {
            let resp=await apiMethod("http://localhost:3001/getAllSoldiers","get",{},headers)
            setSoliders(resp.data)
        } catch (error) {

        }
    }


    return (
     
    <div className='mador--container container'>
      {(!openPopup)?<button className='mador--btn' onClick={setOpenPopup(!openPopup)}>פתיחת חלון</button>:<Soliders></Soliders>}
    </div>
  )
}
