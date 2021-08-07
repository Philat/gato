import React, {useContext, useState} from "react";
import {withRouter} from "react-router-dom";
import {CartContext} from "../../context/cart-context";
import CartItem from "../pages/cart-page/cart-items";
import Layout from "../shared/layout";
import ShippingAddress from "./custom-checkout/shipping-adress";
import './checkout.styles.scss'
import Total from "../pages/cart-page/total";


const Checkout = ({history}) => {
    const {cartItems, itemCount, total,increase, decrease,removeProduct, clearCart } = useContext(CartContext);
    const funcs = {increase, decrease, removeProduct}
    const  [shipping, setShipping] = useState(null);

    const addressShown = {
        display: (shipping? 'none': 'block')
    }
    const addressNotShown = {
        display: (shipping? 'block': 'none')
    }


    return (
        <Layout>
            <div className='checkout'>
                <div style={addressShown}>
                <h2>Информация о заказе</h2>
                <h3>{`Количество: ${itemCount}`}</h3>
                <h4>{`К оплате: ₽${total}`}</h4>
                    <ShippingAddress setShipping = {setShipping}/>
                </div>


                <div style={addressNotShown}>
                    <h2>Проверьте данные</h2>
                    <h3 className='checkout-block'>{`Количество: ${itemCount}`}</h3>
                    <h4>{`К оплате: ₽${total}`}</h4>
                    <h4>{`Имя: ${shipping? shipping.name: 'none'}`}</h4>
                    <h4>{`Email: ${shipping? shipping.email:'none'}`}</h4>
                    <h4>{`Адрес: ${shipping? shipping.address:'none'}`}</h4>
                    <button className='button gato-btn is-black checkout-block'
                                onClick={() =>{window.open("/thank-you",'self');clearCart()}}>ПОДТВЕРДИТЬ</button>


                </div>

                {
                    cartItems.length ===0 ? <div className='empty-cart'>Ваша корзина пуста</div>
                        :
                        <>
                            <div className='cart-page'>
                                <div className='cart-item-container'>
                                    {
                                        cartItems.map(item => <CartItem {...item} key = {item.id} {...funcs}/>)
                                    }
                                </div>
                            </div>
                            <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
                        </>
                }

            </div>
        </Layout>
    )
}

export default withRouter(Checkout);