import { FC } from "react";
import { UserDialogWrapper } from "./UserDialog.styled";
import Toggle from "@/components/Toggle/Toggle";
import { useInitThemeProvider } from "@/providers/theme-provider/ThemeProvider.hooks";

const UserDialog: FC = () => {
    const { toggleTheme, currentTheme } = useInitThemeProvider()

    return (
        <UserDialogWrapper>
            <div className="section">
                <span>THEME</span>
                <div className="toggle-container flex gap-1 items-center">
                    <span className="material-symbols-outlined text-sm">light_mode</span>
                    <Toggle toggled={currentTheme.type === 'light'} onChange={toggleTheme} />
                    <span className="material-symbols-outlined text-sm">dark_mode</span>
                </div>
            </div>
            <div className="section">
                <span>LOG OUT</span>
                <span className="material-symbols-outlined">logout</span>
            </div>
        </UserDialogWrapper>
    );
};

export default UserDialog;
