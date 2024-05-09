import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/Global.styled";
import ThemeContext from "@/context/ThemeContext";
import { useInitThemeProvider } from "./ThemeProvider.hooks";

const ThemesProvider: FC<ThemesProviderProps> = ({ children }) => {
    const { currentTheme, toggleTheme } = useInitThemeProvider();

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

type ThemesProviderProps = {
    children: ReactNode;
}

export default ThemesProvider;
