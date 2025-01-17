import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    
      <div div className="explore-menu" id='explore-menu'>
        <h1>Explore our Menu</h1>
        <div className="menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='menu-list-item'> 
                   <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" srcset="" />
                   <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      </div>
   
  )
}

export default ExploreMenu
