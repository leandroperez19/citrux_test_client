import { User } from "@/services/authService.types";
import { createContext } from "react";

const UserContext = createContext<UserContextProps | null>(null);

export type UserContextProps = {
    user: User['user'] | null;
    setUser: (user: User['user']) => void
}

export default UserContext;