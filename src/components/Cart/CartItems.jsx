import formatCurrency from "format-currency";
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartItems.scss";
const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "LE" };
  return (
    <li className="CartItem__item">
      <div>
        <img
          src={item.img}
          style={{ width: "100px", height: "100px" }}
          alt=""
        />
      </div>
      <div>
        <h3>{item.title.slice(0, 35)}</h3>
        <span>
          Quantity <strong style={{ color: "gray" }}>{item.qty}</strong>
        </span>
        <p style={{ color: "purple" }}>
          <strong>{item.qty * item.price.toFixed(2)}</strong>
        </p>
      </div>
      <button className="CartItem__button" onClick={() => removeItem(item._id)}>
        Remove
      </button>
      <hr />
    </li>
  );
};

export default CartItem;
