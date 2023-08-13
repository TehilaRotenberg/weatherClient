import React, { useState } from 'react'

export default function SelectBox() {
 const [value,setValue]=useState("עיר")
 const [selectboxOpen,setSelectboxOpen]=useState(false)
const options=["עיר","מיקום עיר בארץ","מין","תפקיד, דרגה"]
 const openAndCloseBox=()=>{
    setSelectboxOpen(!selectboxOpen)
 }
    return (
    <div>
        <div className='select-box-header'>
        <label> סדר לפי: </label>
        <span>{value}</span> 
         {
           (!selectboxOpen)? 
           <div onClick={()=>{openAndCloseBox()}}>
           <svg  xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 30 16" fill="none">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M3.61178 14.9355C2.78554 15.6922 1.44593 15.6922 0.619684 14.9355C-0.206561 14.1787 -0.206561 12.9517 0.619684 12.1949L13.3141 0.567539C14.1403 -0.189253 15.4799 -0.189253 16.3062 0.567539L29.0006 12.1949C29.8268 12.9517 29.8268 14.1787 29.0006 14.9355C28.1743 15.6922 26.8347 15.6922 26.0085 14.9355L14.8101 4.67842L3.61178 14.9355Z" fill="#555555"/>
           </svg>
           </div>:<div onClick={()=>{openAndCloseBox()}}>
           <svg  xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 30 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0083 0.567594C26.8346 -0.189198 28.1742 -0.189198 29.0004 0.567594C29.8267 1.32439 29.8267 2.55139 29.0004 3.30818L16.306 14.9355C15.4798 15.6923 14.1402 15.6923 13.3139 14.9355L0.619549 3.30818C-0.206696 2.55139 -0.206696 1.32439 0.619549 0.567594C1.4458 -0.189198 2.7854 -0.189198 3.61165 0.567594L14.81 10.8246L26.0083 0.567594Z" fill="#555555"/>
            </svg>
           </div>
         }{(selectboxOpen)&& <div className='select-box'>
           {options.map((item)=>{
            return(<div key={item} className={`${(item==value)?"bold":""}`} onClick={()=>setValue(item)}>
                {item}
            </div>)
           })}
        </div>}
        </div>
       
    </div>
  )
}
