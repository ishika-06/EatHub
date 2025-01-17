import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <>
              <div className="cart-items-title cart-items-item">
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>Rs  {item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs  {item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr />
            </>
          )
        }
      })}
      <div className="cart-buttom">
        <div className="cart-total">
          <h2>Cart Total</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Rs {getTotalCartAmount()===0?0:50}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>Rs {getTotalCartAmount()===0?0:getTotalCartAmount() + 50}</p>

          </div>
          <div className="haha">
            <button onClick={() => navigate('/order')}> PLACE YOUR ORDER</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
