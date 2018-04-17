import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Jumbotron = (props) => {
	return(
   <div class="container">
  <div class="row">
    <div class="col-md">
    	<h1> {props.username}</h1>

      Image

    </div>
    <div class="col-lg">
sign up questions
    </div>
  </div>
  <div class="row">
  <div class="col">
  rate
      </div>
    <div class="col">
    other users
    </div>
    <div class="col">
    saved articles
    </div>
    </div>

    <div class="row">
    health related articles
    </div>
  </div>

	);
}

export default Jumbotron;