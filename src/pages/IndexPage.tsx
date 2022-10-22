import React, { useState } from 'react';
import DialogConnect from '../components/dialogs/DialogConnect/DialogConnect';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import MobileMenu from '../components/menus/MobileMenu/MobileMenu';
import CollectionSection from '../components/sections/CollectionSection/CollectionSection';
import DropsSection from '../components/sections/DropsSection/DropsSection';
import HideSeekSection from '../components/sections/HideSeekSection/HideSeekSection';
import NewsSection from '../components/sections/NewsSection/NewsSection';
import PromoSection from '../components/sections/PromoSection/PromoSection';
import SellingSection from '../components/sections/SellingSection/SellingSection';
import SubscribeSections from '../components/sections/SubscribeSection/SubscribeSections';
import { lockBody } from '../utils/helpers';

export default function IndexPage() {
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
    <div>

      <MobileMenu show={isOpenMobileMenu} />

      <DialogConnect isOpen={isOpen} onRequestClose={onRequestClose} />

      <Header onExplore={onExplore} onActiveBurger={onActiveBurger} onDisableBurger={onDisableBurger} />

      <PromoSection />

      <HideSeekSection />

      <DropsSection />

      <SubscribeSections />

      <CollectionSection />

      <SellingSection />

      <NewsSection />

      <Footer />

    </div >
  )
}