import { verifyTokenReq } from "@/services/authService"
import { User } from "@/services/authService.types"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Cookies from "js-cookie"

export const useUserHooks = () => {
    const { data } = useQuery({
        queryFn: verifyTokenReq
    })

    const [user, setUser] = useState<User['user'] | null>(null);
    const [userLoading, setUserLoading] = useState(true); 

    const verifyToken = async () => {
        if(!data) return
        if(data.code === 'error') {
            setUser(null);
            setUserLoading(false)
            return
        }
        if(data.code === 'success') {
            setUser(data.data.user);
            setUserLoading(false)
            return
        }
    }

    useEffect(() => {
        const cookies = Cookies.get()
        if(user) return;
        if(!cookies.token) {
            setUserLoading(false)
            return
        }
        verifyToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return {
        user,
        setUser,
        userLoading
    }
}