import React, { FC, PropsWithChildren } from "react";
import Slider from "react-slick";
import TrendingWhoCard from "../../cards/TrendingWhoCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowSize } from "use-hooks";

const TrendingBlocks: FC<PropsWithChildren<{}>> = ({ children }) => {
  const size = useWindowSize();

  return (
    <div className="trending__block">
      <TrendingWhoCard />
      {size.width <= 1100 && (
        <Slider variableWidth arrows={false} dots={false} infinite={false} swipeToSlide className="trending__list js_trending__list">
          {children}
        </Slider>
      )}
      {size.width > 1100 && (
        <div className="trending__list js_trending__list">
          {children}
        </div>
      )}
    </div>
  )
}

export default TrendingBlocks