import React, {useContext, useState} from "react";
import {withRouter} from "react-router-dom";
import {CartContext} from "../../context/cart-context";
import Layout from "../shared/layout";
import ShippingAddress from "./custom-checkout/shipping-adress";
import './checkout.styles.scss'


const Checkout = ({history}) => {
    const {itemCount, total,clearCart} = useContext(CartContext);
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
                <h2>Checkout Summary</h2>
                <h3>{`Total Items: ${itemCount}`}</h3>
                <h4>{`Amount to Pay: ₽${total}`}</h4>
                    <ShippingAddress setShipping = {setShipping}/>
                </div>


                <div style={addressNotShown}>
                    <h2>Check your data</h2>
                    <h3 className='checkout-block'>{`Total Items: ${itemCount}`}</h3>
                    <h4>{`Amount to Pay: ₽${total}`}</h4>
                    <h4>{`Name: ${shipping? shipping.name: 'none'}`}</h4>
                    <h4>{`Email: ${shipping? shipping.email:'none'}`}</h4>
                    <h4>{`Address: ${shipping? shipping.address:'none'}`}</h4>
                    <button className='button gato-btn is-black checkout-block'
                                onClick={() =>{history.push('/thank-you');clearCart()}}>CONFIRM</button>


                </div>

            </div>
        </Layout>
    )
}

export default withRouter(Checkout);