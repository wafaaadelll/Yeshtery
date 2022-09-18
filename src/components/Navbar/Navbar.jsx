import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { FaPhone, FaSearch } from "react-icons/fa";
import {
  HiShoppingCart,
  HiLocationMarker,
  HiHeart,
  HiUser,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
export default function Navbar() {
  const links = [
    { name: "Lorem ipsum dolor sit amet.link1", link: "Shop Now" },
    { name: "Lorem ipsum dolor sit amet.link2", link: "Shop Now" },
    { name: "Lorem ipsum dolor sit amet.link3", link: "Shop Now" },
    { name: "Lorem ipsum dolor sit amet.link4", link: "Shop Now" },
    { name: "Lorem ipsum dolor sit amet.link5", link: "Shop Now" },
  ];
  const categories = [
    { category: "Men" },
    { category: "Women" },
    { category: "Unisize" },
    { category: "Kids" },
    { category: "Best Sellers" },
    { category: "New Arrivals" },
    { category: "Offers" },
  ];
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <div>
      <section id="topNav">
        <div className="container">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Info</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
              <a href="https://erikterwan.com/" target="_blank">
                <li>Show me more</li>
              </a>
            </ul>
          </div>
          <h1>
            <Link
              to={"/Home"}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              yeshtery
            </Link>
          </h1>
          <Swiper
            className="swip"
            navigation={true}
            modules={[Navigation]}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
          >
            Lorem ipsum dolor sit amet.
            {links.map((link) => {
              return (
                <SwiperSlide className="links">
                  {link.name} <a href="/">{link.link}</a>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <section className="contact">
            <div>
              <span>
                <FaPhone />
              </span>
              <a href="">Contact Us</a>
            </div>
            <div>
              <span>
                <HiShoppingCart />
              </span>
              <a href="">Track Order</a>
            </div>
            <div>
              <span>
                <HiLocationMarker />
              </span>
              <a href="">Find Store</a>
            </div>
          </section>
        </div>
      </section>
      <section id="midNav">
        <div className="container">
          <div className="search">
            <FaSearch className="icon" />
            <input type="text" placeholder="Search ... " />
          </div>
          <div className="adidas">
            <img src="/images/adidas.png" alt="adidas logo" />
          </div>
          <section className="shopping">
            <div onClick={showHideCart} aria-hidden="true">
              <span className="shopcart">
                <HiShoppingCart />
                <span className="cart">{cartItems.length}</span>
              </span>
              {/* <Link to={`/cart`}>Cart</Link> */}
              <a>Cart</a>
            </div>
            <div>
              <span>
                <HiHeart />
              </span>
              <a>Wishlist</a>
            </div>
            <div>
              <span>
                <HiUser />
              </span>
              <a>Login</a>
            </div>
          </section>
        </div>
      </section>
      <section id="bottomNav">
        <div className="container">
          {categories.map((category) => {
            return <a href="/">{category.category}</a>;
          })}
        </div>
      </section>
    </div>
  );
}
