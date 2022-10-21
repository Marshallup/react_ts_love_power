import React from "react";
import Slider from "react-slick";
import NewsCard from "../../cards/NewsCard/NewsCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsSection = () => {
  return (
    <section className="home__news">
      <div className="container">
        <div className="home__news__title">Resources for getting started</div>
        <Slider variableWidth arrows={false} dots={false} swipeToSlide className="home__news__list js_home__news__list">
          <NewsCard imgMain="/images/__content/news/2.jpg" />
          <NewsCard imgMain="/images/__content/news/1.jpg" />
          <NewsCard imgMain="/images/__content/news/3.jpg" />
          <NewsCard imgMain="/images/__content/news/3.jpg" />
          <NewsCard imgMain="/images/__content/news/2.jpg" />
          <NewsCard imgMain="/images/__content/news/1.jpg" />
          <NewsCard imgMain="/images/__content/news/3.jpg" />
        </Slider>
      </div>
    </section>
  )
}

export default NewsSection