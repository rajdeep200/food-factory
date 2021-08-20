import React, { useState } from "react";
import { Grid, Menu, MenuItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/slice/cartSlice";

import CartItem from "../../Components/CartItems/CartItem";
import products from "../../products";
import Product from "../../Components/Product/Product";
import sortByData from "../../data";

import "./HomePage.css";

const HomePage = ({ history }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const [option, setOption] = useState("");
  const [productList, setProductList] = useState(products);
  const [anchorEl, setAnchorEl] = useState(null);

  const cartPriceTotal = cartItems.reduce(
    (accumulator, cartItem) =>
      accumulator + cartItem.productQuantity * cartItem.price,
    0
  );

  let date = new Date();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filterBySalad = () => {
    setProductList(
      products.filter((product) => product.category.includes("salad"))
    );
    handleClose();
  };

  const filterBySoup = () => {
    setProductList(
      products.filter((product) => product.category.includes("soup"))
    );
    handleClose();
  };

  const filterByOthers = () => {
    setProductList(
      products.filter((product) => product.category.includes("others"))
    );
    handleClose();
  };

  const compareByRating = (a, b) => {
    return b.rating - a.rating;
  };

  const compareLowToHigh = (a, b) => {
    return a.price - b.price;
  };

  const compareHighToLow = (a, b) => {
    return b.price - a.price;
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const drop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    const addProduct = products.find((product) => product.id === data);
    dispatch(addItemToCart(addProduct));
    console.log(data);
  };

  const handleChange = (e) => {
    setOption(e.target.value);
    switch (e.target.value) {
      case "recommended":
        setProductList(productList.sort(compareByRating));
        break;
      case "lowToHigh":
        setProductList(productList.sort(compareLowToHigh));
        break;
      case "highToLow":
        setProductList(productList.sort(compareHighToLow));
        break;
      default:
        console.log("Not an option");
    }
  };

  return (
    <div className="homepage">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={2}>
          <div className="menu_container">
            <div className="menu_upper"></div>
            <div className="menu_section">
              <i
                className="fas fa-scroll"
                style={{ color: "rgb(4, 255, 159)" }}
              ></i>
              <p className="menu">MENU</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <div className="product_container">
            <div className="filter_container">
              <div className="filter_section">
                <button
                  className="filter_btn"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <div className="filter_logo">
                    <i className="fas fa-filter"></i>
                  </div>
                  <div className="filter">Filter by</div>
                </button>
                <Menu
                  keepMounted
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  open={Boolean(anchorEl)}
                >
                  <MenuItem value="salad" onClick={filterBySalad}>
                    Salad
                  </MenuItem>
                  <MenuItem value="soup" onClick={filterBySoup}>
                    Soup
                  </MenuItem>
                  <MenuItem value="others" onClick={filterByOthers}>
                    Others
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div className="sort_container">
              <div className="sort_section">
                <div className="sorted">Sorted By:</div>
                <div className="dropdown_container">
                  <select
                    name="sortBy"
                    placeholder="Select"
                    value={option}
                    onChange={handleChange}
                    className="sort_select"
                  >
                    {sortByData.map((data) => (
                      <option key={data.value} value={data.value}>
                        {data.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="products_container">
              <Grid container spacing={2}>
                {productList.map((product) => (
                  <Grid key={product.id} item xs={12} sm={6} md={4}>
                    <Product key={product.id} product={product} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <div className="cart_container">
            <div className="cart_section">
              <div className="cart_header">My Order</div>
              <div className="cart_timestamp">
                <div className="time_logo">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="cart_time">{`${date.getHours()}:${date.getMinutes()}`}</div>
              </div>
              <div className="order_details">
                {cartItems.length === 0 ? (
                  <div className="empty_cart">
                    <div className="empty_cartSection">
                      <div className="empty_cartLogo">
                        <i className="fas fa-cart-plus"></i>
                      </div>
                      <div className="empty_cartMsg">Cart is empty</div>
                    </div>
                  </div>
                ) : (
                  cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                  ))
                )}
              </div>
              <div
                className="drop_section"
                onDrop={drop}
                onDragOver={allowDrop}
              >
                <div className="drop_text">Drag&Drop</div>
              </div>
              <div className="total_section">
                <div className="total_text">Total</div>
                <div className="total_amount">${cartPriceTotal}</div>
              </div>
              <div className="cart_checkout">
                <button
                  classname="checkout_btn"
                  onClick={() => history.push("/order")}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
