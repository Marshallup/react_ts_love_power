import React, { FC } from "react";

interface CollectionCardProps {
  imgMain: string
}

const CollectionCard: FC<CollectionCardProps> = ({ imgMain }) => {
  return (
    <div className="home__collection__item">
      <a href="#/" className="home__collection__item__image">
        <div className="home__collection__item__image__inner">
          <img src={imgMain} alt="ABC(abracadabra)" />
        </div>
      </a>
      <div className="home__collection__item__info">
        <a href="#/" className="home__collection__item__name">ABC(abracadabra)</a>
        <div className="home__collection__item__floor">Floor: 73 LPM</div>
      </div>
      <div className="home__collection__item__info_2">
        <div className="home__collection__item__move ">+805.5%</div>
        <div className="home__collection__item__info_lpm">166,25 LPM</div>
      </div>
    </div>
  )
}

export default CollectionCard