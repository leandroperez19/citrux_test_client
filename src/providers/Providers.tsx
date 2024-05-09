import { FC, ReactNode } from "react";
import ThemesProvider from "./theme-provider/ThemeProvider";

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemesProvider>
            {children}
        </ThemesProvider>
    );
}

type ProvidersProps = {
    children: ReactNode;
}

export default Providers;