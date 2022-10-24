import React, { FC, useState } from "react";
import { getUniqID } from "../../../utils/helpers";
import Button from "../../Button/Button";
import { CreateEarningsItemProps, CreatorEarningsProps, CreateEarningsItemValues, CreateEarningsItemValue } from "./types";

const CreateEarningsItem: FC<CreateEarningsItemProps> = ({ onRemove }) => {
  return (
    <div className="field__item__creating__row">
      <input type='text' placeholder="Enter an address, e.g. 0x1ed3... or destin" className="field__item__x" name="url" />
      <div className="field__item__creating__f_percent">
        <input type="number" name="percent" placeholder="0" />
      </div>
      <div className="btn_field__item__creating__remove js_btn_field__item__creating__remove" onClick={onRemove}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.6112 11.9429C23.6112 21.9667 25.054 26.4976 15.3493 26.4976C5.64333 26.4976 7.11594 21.9667 7.11594 11.9429" stroke="#130F26" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25.4567 8.09988H5.26855" stroke="#130F26" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.6433 8.09972C19.6433 8.09972 20.304 3.39258 15.3611 3.39258C10.4195 3.39258 11.0802 8.09972 11.0802 8.09972" stroke="#130F26" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

const CreatorEarnings: FC<CreatorEarningsProps> = () => {
  const [values, setValues] = useState<CreateEarningsItemValues>([{ id: getUniqID() }]);

  function onRemoveValue(valueID: CreateEarningsItemValue['id']) {
    setValues(prevValue => prevValue.filter(value => value.id !== valueID))
  }
  function onAddValue() {
    setValues(prevValues => [...prevValues, { id: getUniqID() }])
  }

  return (
    <div className="field__item__creating">
      {values.map(value => <CreateEarningsItem key={value.id} onRemove={() => onRemoveValue(value.id)} />)}

      <Button
        className={`btn_add_field__creating__row js_btn_add_field__creating__row ${!values.length ? 'btn_add_field__creating__row--mt-none' : ''}`}
        type="button"
        onClick={onAddValue}
      >
        Add address  +
      </Button>
    </div>
  )
}

export default CreatorEarnings