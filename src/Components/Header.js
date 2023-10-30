import React from 'react'
import Earth from '../images/earth.png'

function Header() {
  return (
    <div className='header'>
        <img src={Earth} className='world-icon'></img>
        <p className='heading'>my travel journal.</p>
    </div>
  )
}

export default Header