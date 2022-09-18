import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
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
              <FaSearch className="icon" />
              <input type="text" placeholder="Search ... " />
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
                  <img src="/images/face.png" alt="" />
                  /YESHTERY
                </a>
                <a>
                  <img src="/images/linked.png" alt="" />
                  /YESHTERY
                </a>
                <a>
                  <img src="/images/instgram.webp" alt="" />
                  /YESHTERY
                </a>
                <a>
                  <img src="/images/twitterr.png" alt="" />
                  /YESHTERY
                </a>
              </div>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
}
