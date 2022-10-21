import React from "react";
import SellingCard from "../../cards/SellingCard/SellingCard";

const SellingSection = () => {
  return (
    <section className="home__selling">
      <div className="container">
        <div className="home__selling__inner">
          <div className="home__selling__title">Start Selling Your NFTs</div>
          <div className="home__selling__list">
            <SellingCard mainImg='/images/pages/home/selling/1.png' />
            <SellingCard mainImg='/images/pages/home/selling/2.png' idx={2} />
            <SellingCard mainImg='/images/pages/home/selling/3.png' idx={3} />
          </div>
          <div className="home__selling__bottom">
            <a href="#/" className="btn__default btn__x btn__selling">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SellingSection;