import React from 'react';
import {Link} from 'react-router-dom';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Nav = (props) => {
	return(
		<div>
	<nav className="navbar navbar-expand-lg navColor">
			<a className="navbar-brand linkColor" href="/">{props.brand}</a>
				<h3 className="logo">Lift me up</h3>
			<div className="navbar" id="navbarColor03">
				<ul className="navbar-nav mr-auto">
				<li>
					<Link className="nav-link linkColor" to="/home">Home</Link>
				</li>
				<li className="nav-item liStyle">
					<Link className="nav-link linkColor" to="/profile">profile</Link>
				</li>
				<li className="nav-item liStyle">
					<Link className="nav-link linkColor" to="/quiz">about</Link>
				</li>
				<li className="nav-item liStyle">
					<Link className="nav-link linkColor" to="/chat">Chat</Link>
				</li>
				<li>
				<button className="btn btn-logout my-2 linkColor" onClick = {props.handleLogout}>Log Out</button>

					</li>
				</ul>
			</div>
		</nav>
		</div>
	);
}


export default Nav;