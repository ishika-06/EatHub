import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h1>Tasty food in your neighborhood </h1>
        <p >Order food from favourite restaurants near you. Guilt Free because it's healthy!</p>
        <button class="btn">View Menu</button>
      </div>

      <div className="header-img">
        <img src="headimg.png" alt="" srcset="" height={530} width={500}/>
      </div>
    </div>
  )
}

export default Header
