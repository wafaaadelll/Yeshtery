import React from "react";
import Footer from "../Footer/Footer";
import Items from "../Items/Items";
import Cart from "../Cart/Cart";
const Product = React.lazy(() => import("../Product/Product"));

export default function Screen() {
  return (
    <div>
      <Cart />
      <React.Suspense
        fallback={
          <div style={{ textAlign: "center" }}>
            <img src="/images/load.gif" alt="" style={{ width: "300px" }} />
          </div>
        }
      >
        <Product />
      </React.Suspense>{" "}
      <Items />
      <Footer />
    </div>
  );
}
