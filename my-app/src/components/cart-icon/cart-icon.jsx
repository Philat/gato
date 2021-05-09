import React from "react";
import shoppingBag from '../../assets/shopping-cart.png'
import './cart-icon.styles.scss'

const CartIcon = () => {
    return (
        <div className='cart-container'>
            <img src={shoppingBag} alt='shopping-cart-icon'></img>
            <span className='cart-count'> 5 </span>
        </div>
    );
}

export default CartIcon;