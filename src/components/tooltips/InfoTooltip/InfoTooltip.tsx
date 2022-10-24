import React, { FC } from "react";
import { InfoTooltipProps } from "./types";

const InfoTooltip: FC<InfoTooltipProps> = ({ text }) => {
  return (
    <span className="point_x">
      <div className="point_x_view">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.25 12C21.25 18.937 18.937 21.25 12 21.25C5.063 21.25 2.75 18.937 2.75 12C2.75 5.063 5.063 2.75 12 2.75C18.937 2.75 21.25 5.063 21.25 12Z" stroke="#130F26" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 15.895V12" stroke="#130F26" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.0045 8.5H11.9955" stroke="#130F26" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="point_x_show">{text}</div>
    </span>
  )
}

export default InfoTooltip