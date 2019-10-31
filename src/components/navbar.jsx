import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
	state = {};
	render() {
		return (
			<header>
				<div className='header-logo'>NetFlix</div>
				<div className='header-list'>
					<ul>
						<li>
							<NavLink to='/movies'>Movies</NavLink>
						</li>
						<li>
							<NavLink to='/favourites'>Favourites</NavLink>
						</li>
						<li>
							<NavLink to='/login'>Login</NavLink>
						</li>
						<li>
							<NavLink to='/register'>Register</NavLink>
						</li>
						<li>
							<NavLink to='/logout'>Logout</NavLink>
						</li>
					</ul>
				</div>
			</header>
		);
	}
}

export default NavBar;
