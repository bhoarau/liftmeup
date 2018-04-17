import React from 'react';
import {Link} from 'react-router-dom';

import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Modal = (props) => {
	return(
		<div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	  <Link to = "/signup" >Go to sign up</Link>
			<form>
				<label>Email</label><br/>
				<input value = {props.username} onChange = {props.handleChange} name='username' type='email' placeholder = 'example@email.com'/>
				<br />
				<label>Password</label><br/>
				<input name='password' type='password' value = {props.password} onChange = {props.handleChange} />
				<br />
			</form>      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">	  <Link to = "/signup" >Go to sign up</Link>
</button>
		<button type = 'submit' name = "/auth/signin" onClick = {props.handleSubmit}>Sign In</button>
      </div>
    </div>
  </div>
</div>
		</div>
	);
}

export default Modal;