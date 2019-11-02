import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/loginForm";
import NavBar from "./components/navbar";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout.";
import Favourites from "./components/favourites";
import Movies from "./components/movies";
import authService from "./services/authService";
import MovieForm from "./components/movieForm";

class App extends Component {
	state = {};

	componentDidMount() {
		const user = authService.getCurrentUser();
		this.setState({
			user
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className='main'>
					<NavBar user={this.state.user} />
					<Switch>
						<Route path='/login' component={LoginForm} />
						<Route path='/logout' component={Logout} />
						<Route path='/register' component={RegisterForm} />
						<Route path='/favourites' component={Favourites} />
						<Route path='/movies' component={Movies} />
						<Route path='/movieForm' component={MovieForm} />
					</Switch>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
