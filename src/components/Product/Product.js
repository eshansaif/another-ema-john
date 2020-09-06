import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,seller,price,stock,img} = props.productData;
    return (
        <div className="product">
            <div className="product-img"><img src={img} alt="product image"/></div>

            <div className="product-desc">
                <h4 className="product-title">{name}</h4>
                <p><small>By {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="product-btn" onClick={() => props.addProductHandler(props.productData)}> 
                    <FontAwesomeIcon icon={faShoppingCart} 
                    /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;