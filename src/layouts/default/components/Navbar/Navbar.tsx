import { useScreen } from "@/hooks/useScreen";
import { NavbarWrapper } from "./Navbar.styled";
import logoSmall from "@/assets/static/logo.png";
import logoFull from '@/assets/static/logo-full.png';
import { FC, useRef, useState } from "react";
import UserDialog from "./components/UserDialog/UserDialog";
import { useUser } from "@/hooks/useUser";

export const Navbar: FC = () => {
    const [userDialogActive, setUserDialogActive] = useState(false);
    const userDialog = useRef<HTMLDivElement | null>(null);

    const closeDialog = () => {
        userDialog.current?.classList.add('closing')
        setTimeout(() => {
            setUserDialogActive(false);
        }, 300)
    }

    const userDialogToggle = () => {
        if(!userDialogActive) setUserDialogActive(true)
        if(userDialogActive) closeDialog();
    }

    const { isMobile } = useScreen(1024);
    const { user } = useUser();

    return (
        <NavbarWrapper>
            <div className="navbar-content h-full">
                <div className="left flex items-center">
                    <div className="logo flex items-center">
                        <img src={isMobile ? logoSmall : logoFull} alt="logo" />
                    </div>
                </div>
                <div className="right h-full">
                    {user && (
                        <div className="user-dialog-toggle flex gap-3 items-center text-sm lg:text-normal h-full" onClick={userDialogToggle}>
                            <span className="username">{user.userName.toUpperCase()}</span>
                            <span className={`material-symbols-outlined arrow-down ${userDialogActive && 'rotate-180'}`}>expand_more</span>
                        </div>
                    )}
                </div>
                {userDialogActive && <UserDialog close={closeDialog} reference={userDialog}/>}
            </div>
        </NavbarWrapper>
    );
};

