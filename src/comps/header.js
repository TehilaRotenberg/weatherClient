import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UserContex from '../contex'


export default function Header() {

 const {history}=useContext(UserContex)
  return (
    <div className='header'>
        <nav>
            <ul className='header--ul'>
                <li className='header--li'>
                   <Link className='header--Link' to={"/home"}>ראשי</Link>
                </li>
                <li className='header--li'><Link className='header--Link' to={"/mador"}>מדור</Link></li>
                <li className='header--li'><Link className='header--Link' to={"/history"}>הסטוריה</Link></li>
            </ul>
        </nav>
    </div>
  )
}
