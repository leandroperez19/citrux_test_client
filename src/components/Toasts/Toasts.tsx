import { ToastContainer } from "react-toastify";
import { useInitThemeProvider } from "@/providers/theme-provider/ThemeProvider.hooks";
import { FC } from "react";

const Toasts: FC = () => {
    const { currentTheme } = useInitThemeProvider();
    return <ToastContainer theme={currentTheme.type} position="bottom-right"/>;
};

export default Toasts;
