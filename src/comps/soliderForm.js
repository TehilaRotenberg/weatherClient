import React, { useEffect, useState } from 'react'
import { usernameValidation } from '../validation/userValidation';

export default function SoliderForm() {
    const [solider,setSolider]=useState({
        name:"",
        personal_number:"",
        user_name:"",
        gender:""
    })
    const [validationuserName,setValidationuserName]=useState(false)
    const [filedsRequire,setFiledsRequire]=useState(false)

    
    useEffect(()=>{
            checkFildsNotRequired()
          console.log(filedsRequire);
    },[solider])

    const handleChange=async(event)=>{
        setSolider(prevFormData => {
          return {
              ...prevFormData,
              [event.target.name]: event.target.value,
              
          }  
          
      })
  
      }

      const checkFildsNotRequired=()=>{
        setFiledsRequire(solider.name.length>1&&
        solider.personal_number.length>1&&
        solider.user_name.length>1)
        console.log(filedsRequire);
      }
  return (
    <form className='soliderForm'>
        <div>
        <label>שם החייל</label>
        <input class="form-control" placeholder='שם החייל' name='name'  onChange={(e)=>{handleChange(e)}}></input>
        </div>
        <div>
        <label>מספר אישי</label>
        <input  class="form-control" placeholder='' name='personal_number' onChange={
            
            (e)=>{
               
                handleChange(e)}}></input>
        </div>
       
        <div>
        <label>שם משתמש</label>
        <input  class="form-control" name='user_name' onChange={(e)=>{handleChange(e)}}></input>
        {(!validationuserName)&&<label>שם המשתמש אינו תקין</label>}
        </div>
        <div>
            <label>מין</label>
        <select class="form-select" name='gender' defaultValue={"זכר"} onChange={(e)=>{setValidationuserName(usernameValidation(e.target.value))
            handleChange(e)}}>
            <option>זכר</option>
            <option>נקבה</option>
        </select>
       
        </div> 
        <button className={`add-btn ${(filedsRequire)?"blue--button":"gray--button"}`}>הוספה</button>
    </form>
  )
}
