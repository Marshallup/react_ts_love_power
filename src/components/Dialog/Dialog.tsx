import React, { FC, PropsWithChildren } from "react";
import Modal from 'react-modal'
import CrossIcon from "../icons/CrossIcon";

interface DialogProps {
  isOpen: boolean
  onRequestClose?: () => void,
}

console.log(Modal.defaultStyles, 'ReactModal.defaultStyles')
Modal.defaultStyles.content = {
  inset: 0,
  height: '100%',
  overflow: 'auto',
  outline: 'none'
}
Modal.setAppElement('#root');

const Dialog: FC<PropsWithChildren<DialogProps>> = ({ isOpen, onRequestClose = () => { }, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
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