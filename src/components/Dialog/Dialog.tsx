import React, { FC, PropsWithChildren, useEffect } from "react";
import scrollbarSize from "scrollbar-size"
import { DialogProps } from "./types";
import Modal from 'react-modal'
import CrossIcon from "../icons/CrossIcon";

Modal.defaultStyles.content = {
  inset: 0,
  height: '100%',
  overflow: 'auto',
  outline: 'none'
}
Modal.setAppElement('#root');

const Dialog: FC<PropsWithChildren<DialogProps>> = ({ isOpen, onRequestClose = () => { }, children }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('compensate-for-scrollbar')
      document.body.classList.add('modal-show')
      document.body.style.paddingRight = `${scrollbarSize()}px`
    } else {
      setTimeout(() => {
        document.body.classList.remove('compensate-for-scrollbar')
        document.body.classList.remove('modal-show')
        document.body.style.paddingRight = ''
      }, 200)
    }
  }, [isOpen])

  return (
    <Modal closeTimeoutMS={200} isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="modal__content">
        <div className="modal__inner">
          <div className="modal__cross" onClick={onRequestClose}>
            <CrossIcon />
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default Dialog