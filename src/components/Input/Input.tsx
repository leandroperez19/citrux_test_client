import { HTMLAttributes, HTMLInputTypeAttribute, ReactNode, forwardRef } from "react"
import { InputWrapper } from "./Input.styled"

interface InputProps extends HTMLAttributes<HTMLInputElement>  {
    type?: HTMLInputTypeAttribute
    icon?: string
    label?: string;
    value?: string;
    readOnly?: boolean;
    cantWrite?: boolean;
    disabled?: boolean;
    showErrorMessage?: boolean;
    errorMessage?: string | undefined;
    suffixContent?: ReactNode;
    onClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { errorMessage, type = 'text', icon, label, ...props }, ref
  ) => {

    return (
    <InputWrapper>
        {label && <label className="text-xs font-medium">{label}</label>}
        <div className="input">
          {icon && <span className="material-symbols-outlined">{icon}</span>}
          <input type={type} required={false} {...props} ref={ref} autoComplete="off" className="w-full p-2.5 h-10"/>
        </div>
        {errorMessage && <span className="error-msg text-xs">{errorMessage.toString()}</span>}
    </InputWrapper>
    );
  },
)