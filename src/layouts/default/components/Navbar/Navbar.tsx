import { useScreen } from "@/hooks/useScreen";
import { NavbarWrapper } from "./Navbar.styled";
import logoSmall from "@/assets/static/logo.png";
import logoFull from '@/assets/static/logo-full.png';
import { useUser } from "@/context/UserContext";
import { FC, useState } from "react";
import UserDialog from "./components/UserDialog/UserDialog";

export const Navbar: FC = () => {
    const [userDialogActive, setUserDialogActive] = useState(true);

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
                <div className="right">
                    {user && (
                        <div className="user-dialog-toggle flex gap-3 items-center text-sm lg:text-m">
                            <span className="username">{user.userName.toUpperCase()}</span>
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>
                    )}
                </div>
                {userDialogActive && <UserDialog />}
            </div>
        </NavbarWrapper>
    );
};

