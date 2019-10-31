import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/loginForm";
import NavBar from "./components/navbar";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout.";
import Favourites from "./components/favourites";
import Movies from "./components/movies";

function App() {
	return (
		<React.Fragment>
			<div className='main'>
				<NavBar />
				<Switch>
					<Route path='/login' component={LoginForm} />
					<Route path='/logout' component={Logout} />
					<Route path='/register' component={RegisterForm} />
					<Route path='/favourites' component={Favourites} />
					<Route path='/movies' component={Movies} />
				</Switch>
			</div>
		</React.Fragment>
	);
}

export default App;
