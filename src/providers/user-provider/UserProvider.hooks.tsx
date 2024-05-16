import { logoutReq, verifyTokenReq } from "@/services/authService";
import { User } from "@/services/authService.types";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

export const useUserHooks = () => {
    const [user, setUser] = useState<User["user"] | null>(null);
    const [userLoading, setUserLoading] = useState(true);

    const { mutateAsync: logoutRes } = useMutation({
        mutationFn: logoutReq,
        mutationKey: ['logout']
    })

    const { data } = useQuery({
        queryFn: verifyTokenReq,
        refetchOnWindowFocus: false,
        queryKey: ['verify-token']
    });

    const verifyToken = async () => {
        if (!data) return;
        if (data.code === "error") {
            setUser(null);
            setUserLoading(false);
            return;
        }
        if (data.code === "success") {
            setUser(data.data.user);
            setUserLoading(false);
            return;
        }
    };

    useEffect(() => {
        if (user) return;
        if(!user) verifyToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const logout = async () => {
        const res = await logoutRes();
        if(res.code === 'error') toast('Sorry, there\'s a problem on our side, please try again', { type: 'error' })
        if(res.code === 'success') {
            toast('User logged out successfully', { type: 'success' });
            setUser(null);
        }
    }

    return {
        user,
        setUser,
        userLoading,
        logout
    };
};
