import React from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { toogleCartHidden } from "./../../redux/cart/cart.actions";
import { selectCartItemsCount } from "./../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount, dispatch }) => (
  <div className="cart-icon" onClick={() => dispatch(toogleCartHidden())}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps)(CartIcon);
