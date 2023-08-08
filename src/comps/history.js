import React, { useContext } from 'react'
import UserContex from '../contex'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function History() {
    const {history,setHistory,History,getDefulteValue}=useContext(UserContex);
    const navigate = useNavigate();

    const deleteFromHistory=(i)=>{
     let historySearch=history;
     console.log(historySearch[i]);
     historySearch.splice(i,1);
     setHistory(historySearch)

     if (history.length<1) {
           getDefulteValue()
     }
     
    }

    const deselect=()=>{
      History(history[history.length-2])
      navigate('/home')
    }

    const selectMainPage=(i)=>{
        History(history[i])
        navigate('/home')

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
            history.map((item,index)=>
            <tr key={index}>
            <td className='td'>{item.city.city}</td>
            <td className='td'>{item.city.country}</td>
            <td className='td'>{item.city.continent}</td>
            <td className='td'>
                <ul className='header--ul'> 
                    {(item.city.city==="Jerusalem")&&<li className='header--li' onClick={()=>{selectMainPage(index)}}><Link className='link'>הפוך לראשי</Link></li>}
                    {(index==history.length-1)&&<li className='header--li'>
                        <Link className='link activ--link' onClick={deselect()}>ביטול בחירה</Link>
                    </li>}
                    <li className='header--li'  onClick={()=>{deleteFromHistory(index)}}>
                      מחיקה מההיסטוריה
                    </li>
                </ul>
            </td>
            </tr>)
          }
        </table>
    </div>
  )
}
