import React, { FC } from "react";
import Dialog, { DialogProps } from "../../Dialog";

interface DialogConnectProps extends DialogProps { }

const DialogConnect: FC<DialogConnectProps> = ({ isOpen, onRequestClose }) => {
  return (
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
  )
}

export default DialogConnect