import { React } from "react"
import Users from "./components/users"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import MainPage from "./components/layouts/mainPage"
import NavBar from "./components/navBar"
import Login from "./components/layouts/login"
// import User from "./components/layouts/user"

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={MainPage}></Route>
                    <Route path="/users/:userId?" component={Users}></Route>
                    <Route path="/login" component={Login}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default App
