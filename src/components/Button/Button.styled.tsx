import styled, { DefaultTheme } from "styled-components";

type ButtonWrapperProps = {
    $size: "sm" | "regular" | "lg" | "xl";
    $color: "primary" | "secondary" | "tertiary" | "transparent";
    $disabled: boolean
};

const getColor = (color: ButtonWrapperProps['$color'], theme: DefaultTheme) => {
    const map = {
        'primary': theme.buttons.primary,
        'secondary': theme.buttons.secondary,
        'tertiary': theme.buttons.tertiary,
        'transparent': theme.buttons.transparent
    } as const;
    return map[color] ?? theme.buttons.primary
}

const getSize = (size: ButtonWrapperProps['$size']) => {
    const map = {
        'sm': { mobile: '30px', desktop: '35px' },
        'regular': { mobile: '40px', desktop: '45px' },
        'lg': { mobile: '50px', desktop: '55px' },
        'xl': {mobile: '60px', desktop: '65px'}
    } as const;
    return map[size] ?? { mobile: '40px', desktop: '45px' }
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    height: ${({ $size }) => getSize($size).mobile};
    width: 100%;
    border-radius: 8px;
    background-color: ${({ theme, $color }) => getColor($color, theme).background};
    font-size: 14px;
    color: ${({ theme }) => theme.palette.common.white};

    border: ${({ $color, theme }) => $color === 'transparent' && `1px solid ${theme.inputs.border}`};

    &:hover {
        background-color: 
        ${({ theme, $color, $disabled }) => 
            $disabled ? getColor($color, theme).background : getColor($color, theme).hoverBackground};
    }

    &:disabled {
        opacity: .5;
        cursor: not-allowed;
    }

    @media (1024px <= width) {
        height: ${({ $size }) => getSize($size).desktop};
    }
`;
