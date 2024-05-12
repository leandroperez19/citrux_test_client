import { FC, ReactNode } from "react";
import ThemesProvider from "./theme-provider/ThemeProvider";
import UserProvider from "./user-provider/UserProvider";

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemesProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </ThemesProvider>
    );
}

type ProvidersProps = {
    children: ReactNode;
}

export default Providers;