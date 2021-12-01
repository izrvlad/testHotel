import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";
import './Header.css'
import {path} from "../../config";


export function Header() {
    const {logout} = useContext(AuthContext)
    return (
        <header className="Header">
            <div className="header__title">Simple Hotel Check</div>
            <div className="logout" onClick={logout}><p>Выйти</p><img src={path + "logout.png"} alt=""/></div>
        </header>
    )
}