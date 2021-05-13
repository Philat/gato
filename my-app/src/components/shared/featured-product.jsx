import React, {useContext} from "react";
import './featured-product.styles.scss'
import {isInCart} from "../../helper";
import {CartContext} from "../../context/cart-context";
import {Link} from "react-router-dom";

const FeaturedProduct = (props)=>{
    const {title, imageUrl, price ,history, description, url, id} = props;
    const product =  {title, imageUrl, price , description, url, id};
    const {addProduct, cartItems, increase} = useContext(CartContext);
    const itemInCart = isInCart(product, cartItems)

    return (
      <div className='featured-product'>
          <Link to={url} >
          <div className='featured-image'>
              <img src={imageUrl} alt={description}/>
          </div>
          </Link>

          <div className='name-price'>
              <h3> {title}</h3>
              <p>₽ {price} </p>
              {
                  !itemInCart &&
                  <button
                      className='button is-black gato-btn'
                      onClick={()=>addProduct(product)}>
                      В КОРЗИНУ </button>
              }
              {
                  itemInCart &&
                  <button
                      className='button is-white gato-btn'
                      id = 'btn-white-outline'
                      onClick={()=>increase(product)}>
                      ДОБАВИТЬ ЕЩЕ </button>
              }

          </div>

      </div>
    );
}

export default FeaturedProduct;