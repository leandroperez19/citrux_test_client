import { User } from "@/services/authService.types";
import { createContext, useContext } from "react";

const UserContext = createContext<UserContextProps | null>(null);

export type UserContextProps = {
    user: User['user'] | null;
    setUser: (user: User['user']) => void;
    userLoading: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
    const context = useContext(UserContext);
    if(!context) {
        throw new Error('useUser must be used within an UserProvider')
    }
    return context;
}

export default UserContext;