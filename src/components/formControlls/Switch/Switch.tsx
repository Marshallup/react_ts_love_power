import React, { FC } from "react";
import { SwitchTypes } from "./types";

const Switch: FC<SwitchTypes> = () => {
  return (
    <label className="checkbox__field">
      <input type="checkbox" name="sensitive" />
      <div className="checkbox__field__view"></div>
    </label>
  )
}

export default Switch