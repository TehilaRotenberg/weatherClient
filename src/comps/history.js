import React, { useContext } from 'react'
import UserContex from '../contex'
import { Link } from 'react-router-dom'

export default function History() {
    const {history}=useContext(UserContex);

    const deleteFromHistory=()=>{

    }

  return (
    <div className='container'>
        <table className='container'>
          <tr className='th'>
            <th  className='td'>עיר</th>
            <th className='td'>מדינה</th>
            <th className='td'>יבשת</th>
            <th className='td'>פעולות</th>
          </tr>
          {
            history.map((item,index)=><tr key={index}>
            <td className='td'>{item.propertyCity.city}</td>
            <td className='td'>{item.propertyCity.country}</td>
            <td className='td'>{item.propertyCity.continent}</td>
            <td className='td'>
                <ul className='header--ul'> 
                    {(item.propertyCity.city==="Jerusalem")&&<li className='header--li'><Link className='link'>הפוך לראשי</Link></li>}
                    {(index==history.length-1)&&<li className='header--li'>
                        <Link className='link activ--link'>ביטול בחירה</Link>
                    </li>}
                    <li className='header--li'>
                        <Link className='link activ--link'>מחיקה מההסטוריה</Link>
                    </li>
                </ul>
            </td>
            </tr>)
          }
   
        </table>
    </div>
  )
}
