import { useContext } from "react";
import CartContext from "../../context/CartContext";
import React from "react";
import { HiOutlineShoppingBag, HiX } from "react-icons/hi";
import CartItems from "./CartItems";
import formatCurrency from "format-currency";
import "./Cart.scss";
const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "LE" };

  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <HiX
              style={{ cursor: "pointer" }}
              aria-hidden="true"
              onClick={showHideCart}
            />
          </div>
          <div className="cart__innerWrapper">
            {cartItems.length === 0 ? (
              <div className="empty">
                <HiOutlineShoppingBag className="icon" />
                <h2>OOPS!</h2>
                <p>Your Cart Is Empty ...</p>
              </div>
            ) : (
              <ul>
                <h1 className="title">My Cart</h1>
                <p>
                  <strong>Cart Summary</strong>
                </p>
                {cartItems.map((item) => (
                  <CartItems key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="buttons">
            <div style={{ fontWeight: "bold" }}>
              Total:
              {formatCurrency(
                cartItems.reduce(
                  (amount, item) => item.price * item.qty + amount,
                  0
                ),
                opts
              )}
            </div>
            <button className="btn1">Review Cart</button>
            <button className="btn2">Complete Checkout</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
