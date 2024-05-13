import { FC, MouseEvent, MutableRefObject, useEffect } from "react";
import { UserDialogWrapper } from "./UserDialog.styled";
import Toggle from "@/components/Toggle/Toggle";
import { useTheme } from "@/hooks/useTheme";
import { useUser } from "@/hooks/useUser";

type UserDialogProps = {
    close: () => void;
    reference: MutableRefObject<HTMLDivElement | null>;
};

const UserDialog: FC<UserDialogProps> = ({ close, reference }) => {
    const { toggleTheme, theme } = useTheme();
    const { logout } = useUser()

    useEffect(() => {
        const closeOptions = (e: MouseEvent<HTMLElement> | globalThis.MouseEvent) => {
            const element = e.target as Element;
            if (element.closest(".user-dialog-toggle") || element.closest(".user-dialog-section")) return;
            close();
        };
        document.body.addEventListener("click", (e) => closeOptions(e))
        return () => document.body.removeEventListener("click", closeOptions);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <UserDialogWrapper ref={reference}>
            <div className="user-dialog-section">
                <span>THEME</span>
                <div className="toggle-container flex gap-1 items-center">
                    <span className="material-symbols-outlined text-sm lg:text-base">
                        light_mode
                    </span>
                    <Toggle
                        toggled={theme.type === "light"}
                        onChange={toggleTheme}
                    />
                    <span className="material-symbols-outlined text-sm lg:text-base">
                        dark_mode
                    </span>
                </div>
            </div>
            <div className="user-dialog-section" onClick={logout}>
                <span>LOG OUT</span>
                <span className="material-symbols-outlined">logout</span>
            </div>
        </UserDialogWrapper>
    );
};

export default UserDialog;
