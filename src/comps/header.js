import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <nav>
            <ul>
                <li className='header--li'>
                   <Link className='header--Link' to={"/home"}>ראשי</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
