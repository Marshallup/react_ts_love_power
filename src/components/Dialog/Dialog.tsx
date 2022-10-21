import React, { FC, PropsWithChildren } from "react";
import Modal from 'react-modal'

interface DialogProps {
  isOpen: boolean
  onRequestClose?: () => void,
}

Modal.setAppElement('#root');

const Dialog: FC<PropsWithChildren<DialogProps>> = ({ isOpen, onRequestClose = () => { }, children }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {children}
    </Modal>
  )
}

export default Dialog