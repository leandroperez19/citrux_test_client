import UserContext from "@/context/UserContext";
import { User } from "@/services/authService.types";
import { FC, ReactNode, useState } from "react";

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User['user'] | null>(null)

    return (
        <UserContext.Provider value={{ user, setUser }}>
                {children}
        </UserContext.Provider>
    );
};

type UserProviderProps = {
    children: ReactNode;
}

export default UserProvider;
