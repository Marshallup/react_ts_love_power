import React from "react";

const HideSeekSection = () => {
  return (
    <section className="home__hide__seek">
      <div className="container">
        <div className="hide__seek__block">
          <div className="hide__seek__image">
            <div className="hide__seek__image__inner">
              <img src="/images/pages/home/hide__seek.jpg" alt="hide and seek" />
            </div>
          </div>
          <div className="hide__seek__info">
            <div className="hide__seek__title">Hide and seek</div>
            <div className="hide__seek__row">
              <div className="hide__seek__col hide__seek__col--created">
                <div className="hide__seek__section">
                  <div className="hide__seek__title__section">Created by</div>
                  <a href="#/" className="hide__seek__unit">
                    <div className="hide__seek__unit__image">
                      <img src="/images/pages/home/hide__seek/1.jpg" alt="qweqwe" />
                    </div>
                    <div className="hide__seek__unit__title">@dielamaharanie</div>
                  </a>
                </div>
                <div className="hide__seek__section">
                  <div className="hide__seek__title__section">Current bid</div>
                  <div className="hide__seek__count">0.75 LPM</div>
                </div>
              </div>

              <div className="hide__seek__col hide__seek__col--colection">
                <div className="hide__seek__section">
                  <div className="hide__seek__title__section">Collection</div>
                  <a href="#/" className="hide__seek__unit">
                    <div className="hide__seek__unit__image">
                      <img src="/images/pages/home/hide__seek/2.jpg" alt="alt" />
                    </div>
                    <div className="hide__seek__unit__title">drawn by diela</div>
                  </a>
                </div>
                <div className="hide__seek__section">
                  <div className="hide__seek__title__section">Auction ends in</div>
                  <div className="hide__seek__count">10h 48m 30s</div>
                </div>
              </div>
            </div>
            <div className="hide__seek__btn__wrap">
              <a href="#/" className="btn__default btn__hide__seek">View NFT</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HideSeekSection