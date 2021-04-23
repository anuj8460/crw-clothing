import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  clearIteamFromCart,
  removeItem,
  addItem,
} from "./../../redux/cart/cart.actions";
const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem, total }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchtoProps = (dispatch) => {
  return {
    clearItem: (item) => dispatch(clearIteamFromCart(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchtoProps)(CheckoutItem);
