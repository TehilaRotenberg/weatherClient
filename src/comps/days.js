import React from 'react'


export default function Days(props) {
  // console.log(props.image);
  const getColor=()=>{
if (props.color>3) {
  return 'red'
}
if (props.color>2) {
  return 'orange'
  
}
if (props.color>1) {
  return 'gray'
}
return 'white'
  }
  return (
    <div  className={`days col m-2  ${getColor()}`}>
      <h4>{props.day}</h4>
      <img src={props.image} className={`days--image`}></img>
      <span>{props.temp} &#8451;
</span>
    </div>
  )
}
