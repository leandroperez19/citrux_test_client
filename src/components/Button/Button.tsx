import { FC, ReactNode } from "react";
import { ButtonWrapper } from "./Button.styled";

type ButtonProps = {
    size?: "sm" | "regular" | "lg" | "xl";
    color?: "primary" | "secondary" | "tertiary" | "transparent";
    children: ReactNode | string;
    tailwindClass?: string;
    type?: "button" | "reset" | "submit";
    onClick?: () => void,
	disabled?: boolean
};

const Button: FC<ButtonProps> = ({
    size = "regular",
    color = "primary",
    children,
    tailwindClass,
    type = "button",
    onClick,
	disabled
}) => {
    return (
        <ButtonWrapper
            $size={size}
            $color={color}
            className={tailwindClass}
            type={type}
            onClick={disabled ? () => '' : onClick}
			disabled={disabled}
			$disabled={disabled ?? false}
        >
            {children}
        </ButtonWrapper>
    );
};

export default Button;
