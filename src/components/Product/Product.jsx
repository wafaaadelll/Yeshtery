import React from "react";
import { Carousel } from "react-carousel-minimal";
import { useParams } from "react-router-dom";
import products from "../../Services/products";
import { Helpers } from "../helpers";
import "./Product.scss";
import { useState } from "react";
import ThreeSixty from "react-360-view";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import formatCurrency from "format-currency";

function Product() {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "LE" };
  const { productId } = useParams();
  const thisProduct = products.find((prod) => prod._id === productId);
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count <= 0 ? 0 : count - 1);
  };
  return (
    <div id="productDtl">
      <div>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={thisProduct.thumbnail}
            width="300px"
            height="400px"
            radius="10px"
            thumbnails={true}
            thumbnailWidth="50px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
              position: "relative",
            }}
          />
        </div>
        <div className="degree">
          <label className="btn" htmlFor="modal-1">
            <img
              src="/images/360.svg"
              alt="360degree"
              style={{ width: "45px" }}
            />
          </label>
          <input className="modal-state" id="modal-1" type="checkbox" />
          <div className="modal">
            <label className="modal__bg" htmlFor="modal-1"></label>
            <div className="modal__inner">
              <ThreeSixty
                amount={36}
                imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36"
                fileName="chair_{index}.jpg?v1"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Dtl">
          <img
            src="/images/adidas.png"
            alt="adidas logo"
            style={{ width: "70px" }}
          />
          <h4 style={{ width: "500px" }}>{thisProduct.title}</h4>
          <p>{thisProduct.category}</p>
          <span className="rate">
            {Helpers.displayRating(thisProduct.rating)}
            <span>
              {thisProduct.rating}of5
              <span style={{ color: "gray" }}>22Rates</span>
            </span>
          </span>
          <div className="price">
            <span>{formatCurrency(`${thisProduct.price}`, opts)}</span>
            {thisProduct.offer ? (
              <span style={{ display: "inline" }}>{thisProduct.price}LE</span>
            ) : (
              <span style={{ visibility: "hidden" }}>
                {thisProduct.price}LE
              </span>
            )}
            {thisProduct.offer ? (
              <span style={{ display: "inline" }}>{thisProduct.offer}</span>
            ) : (
              <span style={{ visibility: "hidden" }}>{thisProduct.offer}</span>
            )}
          </div>
          <hr />
          <h4>Size</h4>
          {thisProduct.size.map((sizes) => {
            return <button className="size">{sizes}</button>;
          })}
          <hr />
          <h4>Color</h4>
          {thisProduct.colors.map((color) => {
            return (
              <button className="color">
                <img src={color} alt="" className="color" />
              </button>
            );
          })}
          <hr />
          <h4>Quantity</h4>
          <div className="count">
            <button
              onClick={() => {
                decrement();
              }}
            >
              -
            </button>
            <h3 id="counter">{count}</h3>
            <button
              onClick={() => {
                increment();
              }}
            >
              +
            </button>
          </div>
          <div className="btn">
            <button onClick={() => addToCart(thisProduct)}>Add To Cart</button>
            <button>Pick Up from store</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
