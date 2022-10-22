import React, { FC } from "react";

interface NewsCardProps {
  imgMain: string;
}

const NewsCard: FC<NewsCardProps> = ({ imgMain }) => {
  return (
    <div className="home__news__item">
      <a href='#/' className="home__news__item__image">
        <div className="home__news__item__image__inner">
          <img src={imgMain} alt="How to Easily Setup a MetaMask Wallet" />
        </div>
      </a>
      <div className="home__news__item__info">
        <div className="home__news__item__title">How to Easily Setup a MetaMask Wallet</div>
        <div className="home__news__item__bottom">
          <div className="home__news__item__date">September 13, 2022</div>
          <a href="#/#" className="home__news__item__more">
            Read
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0.999999C1 0.999999 6 3.96 6 6C6 8.03929 1 11 1 11" stroke="#4737FF" strokeWidth="1.07143" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsCard