import React, { useState } from 'react';
import Dialog from '../components/Dialog/Dialog';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import CollectionSection from '../components/sections/CollectionSection/CollectionSection';
import DropsSection from '../components/sections/DropsSection/DropsSection';
import HideSeekSection from '../components/sections/HideSeekSection/HideSeekSection';
import NewsSection from '../components/sections/NewsSection/NewsSection';
import PromoSection from '../components/sections/PromoSection/PromoSection';
import SellingSection from '../components/sections/SellingSection/SellingSection';
import SubscribeSections from '../components/sections/SubscribeSection/SubscribeSections';

export default function IndexPage() {
  const [isOpen, setIsOpen] = useState(false);

  function onExplore() {
    setIsOpen(true)
  }
  function onRequestClose() {
    setIsOpen(false)
  }

  return (
    <div>

      <Dialog isOpen={isOpen} onRequestClose={onRequestClose}>
        <div className="default__modal modal__connect" id="js_modal_connect">
          <div className="modal__connect__inner">
            <div className="modal__connect__title">Connect a wallet</div>
            <div className="modal__connect__text">If you don't have a wallet yet, you can select a provider and create one now.</div>

            <div className="modal__connect__list">
              <a href="#?" className="modal__connect__link">
                <img src="images/icons/wallet/1.svg" alt="MetaMask" />
                MetaMask
              </a>
              <a href="#?" className="modal__connect__link">
                <img src="images/icons/wallet/2.svg" alt="MetaMask" />
                WalletConnect
              </a>
              <a href="#?" className="modal__connect__link">
                <img src="images/icons/wallet/3.svg" alt="MetaMask" />
                Coinbase Wallet
              </a>
              <a href="#?" className="modal__connect__link">
                <img src="images/icons/wallet/4.svg" alt="MetaMask" />
                Gnosis Safe
              </a>
            </div>
            <a href="#?" className="btn__default btn_modal__connect">Learn about wallets</a>
          </div>
        </div>
      </Dialog>

      <Header onExplore={onExplore} />

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