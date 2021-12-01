import {Redirect, Route, Switch} from "react-router-dom";
import {Auth} from "./pages/Auth/Auth";
import {Hotels} from "./pages/Hotels/Hotels";

export function routes(isAuth) {
    if (!isAuth) {
        return (
            <Switch>
                <Route path="/login" component={Auth} exact/>
                <Redirect to="/login"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/hotels" component={Hotels} exact/>
            <Redirect to="/hotels"/>
        </Switch>
    )
}