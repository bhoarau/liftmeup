import React from 'react';
import "./style.css";
import {Link} from 'react-router-dom';

const SignIn = (props)=> {

	return (
		<div>
			<form className="signinform">
			<h1>SIGN IN</h1>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
				<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
				<button type = 'button' name = "btn-signup"> <Link to = "/signup" >Join Us Today</Link> </button>

			</form>
		</div>
	);

}

export default SignIn;