import React from "react";

export default function HeaderSearch() {
  return (
    <div className="header__search">
      <form action="#/" className="js_form">
        <input type='text' required className="header__search__field" placeholder='Search' />
        <input type="submit" className="header__search__btn" value="Отправить" />
      </form>
    </div>
  )
}