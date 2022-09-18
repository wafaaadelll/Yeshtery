import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlinePlay, HiPaperAirplane } from "react-icons/hi";
import "./Footer.scss";

export default function Footer() {
  return (
    <div>
      <section id="footer">
        <section className="container">
          <div className="left">
            <h1>yeshtery</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              vitae voluptas eveniet laborum perspiciatis deserunt quidem totam
              cumque commodi non, voluptatum optio, rerum minima necessitatibus
              ducimus! Blanditiis nihil iusto architecto?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              aspernatur dolorum laboriosam magnam ad consectetur a explicabo
              atque perspiciatis deserunt provident necessitatibus velit, sequi
              vero magni nemo nihil. Ratione, vero? Vel officiis cum, debitis,
              eaque sint eius deleniti veritatis modi corrupti nulla quibusdam
              unde molestiae natus similique harum cumque in!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dolorum sapiente est! Non, delectus dolore.
            </p>
          </div>
          <div>
            <div className="search">
              <button className="subscribe">Subscribe <HiOutlinePlay/></button>
              <input type="text" placeholder="Enter Your Email " />
            </div>
            <section className="right">
              <div className="rl">
                <a>About Us</a>
                <a>Contact Us</a>
                <a>Track Order</a>
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
                <a>Sell With Us</a>
                <a>Shipping And Returns</a>
              </div>
              <div className="rr">
                <a>
                  <img src={process.env.PUBLIC_URL + '/images/face.png'} alt="" />
                  /YESHTERY
                </a>
                <a>
                  <img src={process.env.PUBLIC_URL + '/images/linked.png'} alt="" />
                  /YESHTERY
                </a>
                <a>
                  <img src={process.env.PUBLIC_URL + '/images/instgram.webp'} alt="" />
                  /YESHTERY
                </a>
                <a>
                  <img src={process.env.PUBLIC_URL + '/images/twitterr.png'} alt="" />
                  /YESHTERY
                </a>
              </div>
            </section>
          </div>
        </section>
        <div className="contain">
          <div>
            <p>@ 2021 yeshtery all rights reserved.</p>
          </div>
          <div className="logos">
            <img src={process.env.PUBLIC_URL + '/images/cash.png'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/visa.png'} alt="" />
            <img src={process.env.PUBLIC_URL + '/images/mastr.png'} alt="" />
          </div>
          <div>
            <h3>Bowered by Nasnav</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
