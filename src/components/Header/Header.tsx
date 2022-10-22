import React, { FC, useState } from "react";
import HeaderSearch from "../forms/HeaderSearch/HeaderSearch";

interface HeaderProps {
  onExplore?: () => void,
  onActiveBurger?: () => void,
  onDisableBurger?: () => void,
}

const Header: FC<HeaderProps> = ({ onExplore = () => { }, onActiveBurger, onDisableBurger }) => {

  const [activeBurger, setActiveBurger] = useState(false)

  function onClickBurger() {
    if (activeBurger) {
      onDisableBurger?.()
      setActiveBurger(false)
    } else {
      onActiveBurger?.()
      setActiveBurger(true)
    }
  }
  function onClickExplore() {
    onExplore();
  }

  return (
    <header className="header_main">
      <div className="container">

        <a href="index.html" className="header__logo">
          <img src={require('../../assets/images/logo.png')} alt="main logo" />
        </a>

        <HeaderSearch />


        <div className="header__info">
          <div className="header__links">
            <a href="#/">Create</a>
            <a href="#/">Explore</a>
          </div>


          <a href="#/" data-fancybox data-src="#js_modal_connect" className="btn__header__connect" onClick={onClickExplore}>
            Connect
            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0713 12.992H16.8358C15.2936 12.992 14.043 11.7414 14.043 10.1981C14.043 8.65588 15.2936 7.40527 16.8358 7.40527H21.0381" stroke="white" strokeWidth="1.63462" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.3127 10.1342H16.9889" stroke="white" strokeWidth="1.63462" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.29004 5.87439H10.7144" stroke="white" strokeWidth="1.63462" strokeLinecap="round" strokeLinejoin="round" />
              <path fillRule="evenodd" clipRule="evenodd" d="M0.958008 10.3522C0.958008 3.3727 3.4914 1.04688 11.0937 1.04688C18.6949 1.04688 21.2283 3.3727 21.2283 10.3522C21.2283 17.3308 18.6949 19.6576 11.0937 19.6576C3.4914 19.6576 0.958008 17.3308 0.958008 10.3522Z" stroke="white" strokeWidth="1.63462" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <button className={`btn__header__menu btn__menu js_btn_menu ${activeBurger ? 'active' : ''}`} onClick={onClickBurger}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>




      </div>
    </header>
  )
}

export default Header