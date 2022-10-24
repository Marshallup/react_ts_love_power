import React, { FC } from "react";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <input className={`field__item__x ${className?.split(' ')}`} {...props} />
  )
}

export default Input;