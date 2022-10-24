import React, { useState, FC, PropsWithChildren } from "react";
import DialogConnect from "../../components/dialogs/DialogConnect/DialogConnect";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MobileMenu from "../../components/menus/MobileMenu/MobileMenu";
import { lockBody } from '../../utils/helpers';
import { DefaultLayoutProps } from "./types";

const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = ({ hasPaddingTop, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  function onExplore() {
    setIsOpen(true)
  }
  function onActiveBurger() {
    setIsOpenMobileMenu(true)
    lockBody()
  }
  function onDisableBurger() {
    setIsOpenMobileMenu(false)
    lockBody(false)
  }
  function onRequestClose() {
    setIsOpen(false)
  }

  return (
    <>
      <MobileMenu show={isOpenMobileMenu} />

      <DialogConnect isOpen={isOpen} onRequestClose={onRequestClose} />

      <Header onExplore={onExplore} onActiveBurger={onActiveBurger} onDisableBurger={onDisableBurger} />

      <div className={`${hasPaddingTop ? 'main__content' : ''}`}>
        {children}
      </div>

      <Footer />
    </>
  )
}

export default DefaultLayout