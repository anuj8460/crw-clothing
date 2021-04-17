import React from "react";
import CustomButton from "./../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "./../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toogleCartHidden } from "./../../redux/cart/cart.actions";
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toogleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
