import React from "react";
import CollectionCard from "../../cards/CollectionCard/CollectionCard";

const CollectionSection = () => {
  return (
    <div className="home__collection">
      <div className="container">
        <div className="home__collection__top">
          <div className="home__collection__title">
            Top Collections
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.1673 18.4165C41.1673 18.4165 32.1887 33.5832 26.0007 33.5832C19.8148 33.5832 10.834 18.4165 10.834 18.4165" stroke="#130F26" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="home__collection__tab js_home__collection__tab">
            <a href="#/" className='active'>1 day</a>
            <a href="#/">7 days</a>
            <a href="#/">30 days</a>
          </div>
        </div>
        <div className="home__collection__list js_home__collection__list">

          <CollectionCard imgMain="/images/pages/home/collection/1.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/2.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/1.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/2.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/1.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/2.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/3.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/1.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/2.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/3.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/1.jpg" />
          <CollectionCard imgMain="/images/pages/home/collection/2.jpg" />
        </div>
        <div className="home__collection__bottom">
          <a href="#/" className="btn__default btn__y btn__home__collection">View all</a>
        </div>
      </div>
    </div>
  )
}

export default CollectionSection