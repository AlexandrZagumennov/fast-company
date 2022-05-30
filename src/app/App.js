import React from "react";
import Users from "./components/users";
import NavBar from "./components/navBar";
import Login from "./components/login";
import Main from "./components/main";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />

                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
