import './App.css';
import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hoocks/useAuth/useAuth";
import {routes} from "./routes";
import {Header} from "./components/Header/Header";

function App() {
    const {loginHandler, logout, isAuth} = useAuth();
    const route = routes(isAuth)
    return (
        <AuthContext.Provider value={{login: loginHandler, logout, isAuth}}>
            <div className={"App"}>
                {isAuth ? <Header/> : null}
                {route}
            </div>
        </AuthContext.Provider>
    );
}

export default App;
