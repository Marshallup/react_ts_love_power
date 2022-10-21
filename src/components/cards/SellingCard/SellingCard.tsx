import React, { FC } from "react";

interface SellingCardProps {
  mainImg: string;
  idx?: number;
}

const SellingCard: FC<SellingCardProps> = ({ mainImg, idx = 1 }) => {
  return (
    <div className={`home__selling__item home__selling__item--${idx}`}>
      <div className="home__selling__item__title">Mint your NFTs with no fees</div>
      <img className="home__selling__item__image" src={mainImg} alt="alt" />
    </div>
  )
}

export default SellingCard