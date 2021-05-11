import React, {useContext} from "react";
import {withRouter} from "react-router-dom";
import Layout from "../shared/layout";
import '../checkout/checkout.styles.scss'


const Success = (history) => {


    return (
        <Layout>
            <div className='thank-you checkout'>
                <h2 className= 'checkout-block'>Thank you for your order!</h2>
                <p className='checkout-block'>Listen to your phone when we're calling for you...</p>
                <p>Only in email info will be for you ...</p>
                <p>don't wait for your visit and further return</p>
                <p>But listen to your phone to tell us 'Confirm'</p>
                <button className='button gato-btn is-black checkout-block'
                        onClick={()=>history.push('/kitchen')}>
                    CONTINUE SHOPPING
                </button>
            </div>

        </Layout>
    )
}

export default Success;