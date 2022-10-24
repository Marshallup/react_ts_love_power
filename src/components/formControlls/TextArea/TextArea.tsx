import React, { FC } from "react";
import { TextAreaProps } from "./types";

const TextArea: FC<TextAreaProps> = ({ label, required = false, ...props }) => {
  return (
    <textarea className="field__item__x field__item__x--textarea" required={required} {...props} />
  )
}

export default TextArea