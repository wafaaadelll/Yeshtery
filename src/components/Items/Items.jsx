import React from "react";
import "./Items.scss";
import { Helpers } from "../helpers";
import { Link } from "react-router-dom";
import products from "../../Services/products";
export default function Items() {
  return (
    <div>
      <div className="container">
        <div>
          <h2>Similar Products</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <section className="product">
          {products.map((product) => {
            return (
              <div className="element">
                <Link to={`/Item/${product._id}`}>
                  <img src={product.img} alt={product.title} />
                </Link>
                <div className="title">{product.title}</div>
                <div>
                  <section className="offers">
                    <div>
                      <p className="pric">{product.price}</p>
                      {product.offer ? (
                        <a>
                          <span>{product.price} </span>
                          <span>{product.offer}</span>
                        </a>
                      ) : (
                        " "
                      )}
                    </div>
                    <section>
                      <img src="/images/adidas.png" alt="adidas logo" />
                    </section>
                  </section>

                  <span className="rating">
                    {Helpers.displayRating(product.rating)}
                    <span>{product.rating}of5</span>
                  </span>
                  <a>
                    Pickup From:{" "}
                    <span style={{ fontWeight: "bold" }}>{product.from}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
