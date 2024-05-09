import { FC, HTMLInputTypeAttribute } from "react"
import { InputWrapper } from "./Input.styled"

type InputProps = {
    label?: string
    type?: HTMLInputTypeAttribute
    name?: string
    icon?: string
    props?: object
}

export const Input: FC<InputProps> = ({ label, type = 'text', icon, ...props }) => {
  return (
    <InputWrapper>
        {label && <label htmlFor="">{label}</label>}
        <div className="input">
          {icon && <span className="material-symbols-outlined">{icon}</span>}
          <input type={type} {...props} />
        </div>
    </InputWrapper>
  )
}
