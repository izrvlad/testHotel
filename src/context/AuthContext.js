import {createContext} from "react";

export const AuthContext = createContext({
    login: Function.prototype,
    logout: Function.prototype,
    isAuth: false
})

