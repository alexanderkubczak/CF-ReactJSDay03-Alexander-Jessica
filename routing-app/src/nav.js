import React from 'react';
import './nav.css';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import HomeComponent from './HomeComponent.js';
import NewsComponent from './NewsComponent.js';
import AboutComponent from './AboutComponent.js';
import ContactComponent from './ContactComponent.js';

const Nav = () => {
	return(
		<Router>
			<ul className = "navBar">
				<li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
				<li><NavLink to="/news" exact activeClassName="active">News</NavLink></li>
				<li><NavLink to="/about" exact activeClassName="active">Contact</NavLink></li>
				<li><NavLink to="/contact" exact activeClassName="active">About</NavLink></li>
			</ul>

			<main>
				<Switch>
					<Route path="/" exact component={HomeComponent} />
					<Route path="/news" exact component={NewsComponent} />
					<Route path="/about" exact component={AboutComponent} />
					<Route path="/contact" exact component={ContactComponent} />
					<Redirect to="/"/>
				</Switch>
			</main>
		</Router>

		);

}

export default Nav;