import React from 'react'
import { Grid } from "@material-ui/core";
import "./OrderItem.css"

const OrderItem = ({cartItem}) => {
    return (
        <div className="orderItem">
            <Grid container>
                <Grid item xs={12} sm={12} md={3} >
                    <div className="orderItem_img">
                        <img src={cartItem.image} alt={cartItem.id}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={3} >
                    <div className="orderItem_details">
                        <div className="orderItem_title">{cartItem.name}</div>
                        <div className="orderItem_quantity">{cartItem.quantity}</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={3} >
                    <div className="orderItem_numberSection">
                        <div className="orderItem_number">Quantity: {cartItem.productQuantity}</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={3} >
                    <div className="orderItem_priceSection">
                        <div className="orderItem_priceText" >Price: </div>
                        <div className="orderItem_price">$
                            {
                                cartItem.productQuantity * cartItem.price
                            }
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderItem
