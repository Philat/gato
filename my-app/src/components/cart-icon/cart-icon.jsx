import React, {useContext} from "react";
import {withRouter} from "react-router-dom";
import shoppingBag from '../../assets/shopping-cart.png'
import {CartContext} from "../../context/cart-context";
import './cart-icon.styles.scss'

const CartIcon = ({history}) => {
    const {itemCount ,cartItems} = useContext(CartContext);
    console.log('CartItems: ',cartItems);

    return (
        <a className='cart-container' href='/cart'>
            <div>
                <img src={shoppingBag} alt='shopping-cart-icon'/>
                    {
                        itemCount > 0 ? <span className='cart-count'> {itemCount} </span> : null
                    }
            </div>
        </a>
    );
}

export default withRouter(CartIcon);