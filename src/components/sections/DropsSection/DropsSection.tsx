import React from "react";
import Slider from "react-slick";
import DropCard from "../../cards/DropCard/DropCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DropsSection = () => {
  return (
    <section className="home__drops">
      <div className="container">
        <div className="home__drops__title">Notable Drops</div>
        <Slider variableWidth arrows={false} dots={false} swipeToSlide className="home__drops__list js_home__drops__list">
          <DropCard imageMain='/images/__content/card__drop/1.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
          <DropCard imageMain='/images/__content/card__drop/2.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
          <DropCard imageMain='/images/__content/card__drop/3.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
          <DropCard imageMain='/images/__content/card__drop/2.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
          <DropCard imageMain='/images/__content/card__drop/1.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
          <DropCard imageMain='/images/__content/card__drop/3.jpg' imageInfo="/images/pages/home/hide__seek/1.jpg" />
        </Slider>
        {/* </div> */}
      </div>
    </section>
  )
}

export default DropsSection