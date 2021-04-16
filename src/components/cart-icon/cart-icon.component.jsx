import React from "react";

import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toogleCartHidden } from "./../../redux/cart/cart.actions";
const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toogleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
