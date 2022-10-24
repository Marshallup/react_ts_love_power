import React, { FC, PropsWithChildren } from "react";
import { ButtonProps } from "./types";

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <button className={'btn__default'} {...props}>{children}</button>
  )
}

export default Button;