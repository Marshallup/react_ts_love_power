import React, { FC, PropsWithChildren } from "react";
import InfoTooltip from "../../tooltips/InfoTooltip/InfoTooltip";
import { FormItemProps } from "./types";

const FormItem: FC<PropsWithChildren<FormItemProps>> = ({ label, required, subText, tooltipText, tooltipHeader, group, className, submit, children }) => {
  return (
    <div className={`field__item ${className ? className.split(' ') : ''} ${submit ? 'field__item--submit' : ''}`}>
      <div className="field__item__title">
        {label}{required ? '*' : ''}
        {tooltipHeader ? (
          <InfoTooltip text={tooltipHeader.text} />
        ) : null}
      </div>
      {subText ? (
        <div className="field__item__text">
          {subText}
          {tooltipText ? (
            <InfoTooltip text={tooltipText.text} />
          ) : null}
        </div>
      ) : ''}
      <div className={`${group ? 'field__item__group' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default FormItem