import React, { FC } from 'react'

interface MobileMenuProps {
  show?: boolean,
}

const MobileMenu: FC<MobileMenuProps> = ({ show }) => {
  return (
    <div className={`menu__mobile js__modal__menu ${show ? 'show' : ''}`}>
      <div className="container">
        <div className="menu__mobile__search">
          <div className="header__search">
            <form action="#/" className="js_form">
              <input type='text' required className="header__search__field" placeholder='Search' />
              <input type="submit" className="header__search__btn" value="Отправить" />
            </form>
          </div>
        </div>
        <div className="menu__mobile__col">
          <ul>
            <li className="menu__mobile__title">
              <a href="#/">Create</a></li>
            <li><a href="#?">NFT</a></li>
            <li><a href="#?">Collection</a></li>
          </ul>
        </div>
        <div className="menu__mobile__col">
          <ul>
            <li className="menu__mobile__title"><a href="#?">Explore</a></li>
            <li><a href="#?">Owned NFT</a></li>
            <li><a href="#?">Created NFT</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu