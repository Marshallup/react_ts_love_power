import { InfoTooltipProps } from "../../tooltips/InfoTooltip"

export interface FormItemProps {
  label?: string
  subText?: string
  required?: boolean
  tooltipText?: InfoTooltipProps
  tooltipHeader?: InfoTooltipProps
  submit?: boolean,
  group?: boolean,
  className?: string
}