import React, {useContext, useState , useEffect} from "react";
import {withRouter} from 'react-router-dom';
import {ProductsContext} from "../../context/products-context";
import Layout from "../shared/layout";
import './single-product.styles.scss';

const SingleProduct =({match, history: {push}} ) => {
    const {products} = useContext(ProductsContext);
    const { id } = match.params;
    const [product, setProduct] = useState(null);
    useEffect(()=>{
        const product = products.find(item => Number(item.id) === Number(id));

        //if not exist
        if(!product){
            return push('/kitchen');
        }

        setProduct(product);
    }, [id,product,push,products] );

    if (!product) {return null}

    const {imageUrl, title, price, description } = product;
    return (
        <Layout>
            <div className='single-product-container'>

                <div className='product-image'>
                    <img src={imageUrl} alt={description}/>
                </div>

                <div className='product-details'>
                    <div className='name-price'>
                        <h3>{title}</h3>
                        <p>₽ {price}</p>
                    </div>


                <div className='add-to-cart-buttons'>
                    <button className='button is-white gato-btn' id = 'btn-white-outline-add'>
                        ADD TO CART
                    </button>
                    <button className='button is-black gato-btn' id ='btn-white-outline-checkout'>
                        PROCEED TO CHECKOUT
                    </button>
                </div>

                <div className='product-description'>
                    <p>
                        {description}
                    </p>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(SingleProduct);