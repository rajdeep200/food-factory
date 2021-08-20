import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../Redux/slice/cartSlice";

import "./CartItem.css";

const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch()

  return (
    <div className="cartItems">
      <div className="cartItem_container">
        <div className="cartItem_img">
          <img src={cartItem.image} alt={cartItem.id} />
        </div>
        <div className="cartItem_details">
          <div className="cartItem_title">{cartItem.name}</div>
          <div className="cartItem_quantity">{cartItem.quantity}g</div>
        </div>
        <div className="cartItem_numberSection">
          <div className="cartItem_minus" onClick={() => dispatch(removeItemFromCart(cartItem))} >-</div>
          <div className="cartItem_number">{cartItem.productQuantity}</div>
          <div className="cartItem_plus" onClick={() => dispatch(addItemToCart(cartItem))} >+</div>
        </div>
        <div className="cartItem_priceSection">
          <div className="cartItem_price">
            ${cartItem.productQuantity * cartItem.price}
          </div>
          <div className="cartItem_remove" onClick={() => dispatch(removeItemFromCart(cartItem))} >×</div>
        </div>
      </div>
      {/* <Grid container>
                <Grid item xs={12} sm={12} md={4} >
                    <div className="cartItem_img">
                        <img src={cartItem.image} alt={cartItem.id}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <div className="cartItem_details">
                        <div className="cartItem_title">{cartItem.name}</div>
                        <div className="cartItem_quantity">{cartItem.quantity}</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <div className="cartItem_numberSection">
                        <div className="cartItem_minus">-</div>
                        <div className="cartItem_number">{cartItem.productQuantity}</div>
                        <div className="cartItem_plus">+</div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <div className="cartItem_priceSection">
                        <div className="cartItem_price">
                            {
                                cartItem.productQuantity * cartItem.price
                            }
                        </div>
                        <div className="cartItem_remove">×</div>
                    </div>
                </Grid>
            </Grid> */}
    </div>
  );
};

export default CartItem;
