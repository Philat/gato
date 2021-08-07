import React from "react";
import {PlusCircleIcon, MinusCircleIcon, TrashIcon} from "../../icons";

const CartItem = (props) =>{
    const {title, imageUrl, price, quantity, id, description, increase, decrease, removeProduct } = props;
    const product = {title, imageUrl, price, quantity, id, description};

    return (
        <div className='cart-item'>
            <div className='item-image'>
                <h4>{title}</h4>
                <img src={imageUrl} alt={id}/>
            </div>
            <div className='name-price'>

                <p>₽ {price}</p>
            </div>
            <div className='quantity'>
                <p>{`Количество: ${quantity}`}</p>
            </div>
            <div className='btns-container'>
                <button
                className='btn-increase'
                onClick={()=>increase(product)}>
                    <PlusCircleIcon width='20px'/>
                </button>
                {
                    quantity === 1 &&
                        <button
                            className='btn-trash'
                            onClick={()=>removeProduct(product)}>
                            <TrashIcon width='20px'/>
                        </button>
                }
                {
                    quantity >1 &&
                        <button
                            className='btn-decrease'
                            onClick={()=>decrease(product)}>
                            <MinusCircleIcon width='20px'/>
                        </button>
                }
            </div>
        </div>
    );
}

export default CartItem;