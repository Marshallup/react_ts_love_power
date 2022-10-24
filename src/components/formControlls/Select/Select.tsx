import React, { FC, useState, createRef, MouseEvent, MutableRefObject, useMemo } from "react";
import { useOnClickOutside } from "use-hooks";
import { SelectProps } from "./types";

const Select: FC<SelectProps> = ({ label, subText, placeholder = 'Select category' }) => {
  const selectRef = createRef<HTMLDivElement>();
  const [active, setActive] = useState(false)
  const [value, setValue] = useState<number | null>(null);
  const options = useMemo(() => ([
    {
      value: 1,
      label: 'option 1',
    },
    {
      value: 2,
      label: 'option 2',
    },
    {
      value: 3,
      label: 'option 3',
    },
    {
      value: 4,
      label: 'option 4',
    },
    {
      value: 5,
      label: 'option 5',
    },
  ]), [])
  const showValue = useMemo(() => {
    return options.find(option => option.value === value)?.label || null
  }, [options, value])

  function onClickSelect(event: MouseEvent<HTMLDivElement>) {
    event.stopPropagation()
    setActive(prevState => !prevState)
  }

  function selectOption(optionVal: number) {
    if (value !== optionVal) {
      setValue(optionVal)
      setActive(false)
    }
  }

  useOnClickOutside(selectRef as MutableRefObject<HTMLDivElement>, () => setActive(false))
  return (
    <div ref={selectRef} className={`custom__select js_custom__select ${active ? 'active' : ''}`}>
      <div className="custom__select__view" onClick={onClickSelect}>{!value ? placeholder : showValue}</div>
      <input type="hidden" name="select" />
      <div className="custom__select__list">
        <ul>
          {
            options.map(option => (
              <li key={option.value} onClick={() => selectOption(option.value)}>{option.label}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Select;