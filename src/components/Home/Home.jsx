import React from "react";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Items from "../Items/Items";

export default function Home() {
  return (
    <div>
      <Cart />
      <Items />
      <Footer />
    </div>
  );
}
