import React, { FC } from "react";
import { TrendingCardProps } from "./types";

const TrendingCard: FC<TrendingCardProps> = ({ img = '/images/__content/card__drop/1.jpg' }) => {
  return (
    <div className="trending__item">
      <div className="trending__item__image">
        <div className="trending__item__image__inner">
          <img src={img} alt="alt" />
        </div>
      </div>
      <div className="trending__item__info">
        <div className="trending__item__info__add_text">Buy now</div>
        <div className="trending__item__info__add_value">0.869 LPM</div>
      </div>
    </div>
  )
}

export default TrendingCard