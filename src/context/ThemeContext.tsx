import { createContext } from "react";
import { DefaultTheme } from "styled-components";

const ThemeContext = createContext<ThemeContextProps | null>(null);

export type ThemeContextProps = {
    theme: DefaultTheme;
    toggleTheme: () => void;
}

export default ThemeContext;