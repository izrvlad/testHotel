import {useEffect, useState} from "react";


export function useAuth() {
    const [isLogin, setIsLogin] = useState(false)

    const loginHandler = (login) => {
        localStorage.setItem('userData', JSON.stringify(login))
        setIsLogin(true)
    }
    const logout = () => {
        localStorage.removeItem('userData')
        setIsLogin(false)
    }
    useEffect(() => {
        const login = JSON.parse(localStorage.getItem('userData'))
        if (login) {
            setIsLogin(true)
        }
    }, [])
    return {loginHandler, logout, isAuth: isLogin}
}