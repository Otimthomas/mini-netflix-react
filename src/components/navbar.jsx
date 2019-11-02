import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
	state = {};
	render() {
		const { user } = this.props;
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
						{!user && (
							<React.Fragment>
								<li>
									<NavLink to='/login'>Login</NavLink>
								</li>
								<li>
									<NavLink to='/register'>Register</NavLink>
								</li>
							</React.Fragment>
						)}
						{user && (
							<React.Fragment>
								<li>
									<NavLink to='/logout'>Logout</NavLink>
								</li>
								<li>
									<NavLink to='/movieForm'>Add Movie</NavLink>
								</li>
								<li>
									<NavLink to='/profile'>{user.name}</NavLink>
								</li>
							</React.Fragment>
						)}
					</ul>
				</div>
			</header>
		);
	}
}

export default NavBar;
