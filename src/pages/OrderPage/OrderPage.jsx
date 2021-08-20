import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import OrderItem from "../../Components/OrderItem/OrderItem";

import "./OrderPage.css"

const OrderPage = ({history}) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const cartPriceTotal = cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.productQuantity * cartItem.price, 0)

    useEffect(() => {
        if(cartItems.length === 0){
            history.push("/");
        }
    }, [cartItems,history])

    return (
        <div className="orderPage" >
            <div className="orderPage_heading">Order Details</div>
            <div className="orderPage_details">
                {
                    cartItems.map(
                        cartItem => (
                            <OrderItem key={cartItem.key} cartItem={cartItem} />
                        )
                    )
                }
            </div>
            <div className="orderPage_total">Total: ${cartPriceTotal}</div>
        </div>
    )
}

export default OrderPage
