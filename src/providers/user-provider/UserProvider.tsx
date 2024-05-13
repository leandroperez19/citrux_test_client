import UserContext from "@/context/UserContext";
import { FC, ReactNode } from "react";
import { useUserHooks } from "./UserProvider.hooks";

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const { user, setUser, userLoading, logout } = useUserHooks()

    return (
        <UserContext.Provider value={{ user, setUser, userLoading, logout }}>
                {children}
        </UserContext.Provider>
    );
};

type UserProviderProps = {
    children: ReactNode;
}

export default UserProvider;
