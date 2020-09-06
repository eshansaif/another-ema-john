import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const subTotal = props.cart.reduce((total,element) => total + element.price ,0);
    const tax = parseFloat(((2 / 100) * subTotal).toFixed(2));

    let shipping = 0;

    const grandTotal = parseFloat((subTotal + shipping + tax).toFixed(2));
    
    return (
        <div className="cart">
            
    <h3>Order Summary</h3>
    <p>Items ordered:{props.cart.length}</p>
    <table >
        <tbody>
            <tr>
                <td className="table-title">Sub-total</td>
                <td>${subTotal}</td>
            </tr>
            <tr>
                <td className="table-title">Shipping/handling</td>
                <td>${shipping}</td>
            </tr>
            <tr>
                <td className="table-title">Tax/vat</td>
                <td>${tax}</td>
            </tr>
            <tr>
                <td className="table-title">Grand-total</td>
                <td>${grandTotal}</td>
            </tr>
        </tbody>
    </table>

            
            </div>
    );
};

export default Cart;