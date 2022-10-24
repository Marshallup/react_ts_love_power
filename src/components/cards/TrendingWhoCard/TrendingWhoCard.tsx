import React from "react";

const TrendingWhoCard = () => {
  return (
    <div className="trending__block__who">
      <div className="trending__block__who__image">
        <div className="trending__block__who__image__inner">
          <img src="images/__content/trading/1.jpg" alt="" />
        </div>
      </div>
      <div className="trending__block__who__info">
        <div className="trending__block__who__name">DigiDaigaku Genesis</div>
        <div className="trending__block__who__count">121 NFTs</div>
        <a href="#@" className="user__unit">
          <div className="user__unit__image">
            <img src="images/pages/home/hide__seek/1.jpg" alt="ss" />
          </div>
          <div className="user__unit__title">@dielamaharanie</div>
        </a>
      </div>
    </div>
  )
}

export default TrendingWhoCard