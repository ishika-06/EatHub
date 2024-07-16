import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,price,description,image}) => {

    
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className='food-item'>
       
            <img className='food-item-image' src={url+"/images/"+image} alt="" />
            
     
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />

        </div>
        <p className="food-item-desc">{description}</p>


        <div className="food-item-image-container">
        <p className="food-item-price">Rs {price}</p>
        {
                !cartItems[id]?
                <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" srcset="" />
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
               </div>
      </div>
    </div>
  )
}

export default FoodItem