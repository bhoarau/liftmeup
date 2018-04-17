import React from 'react';
import "./style.css";

{/* <script>
var elmt = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var sum = 0;
for( var i = 0; i < elmt.length; i++ ){
    sum += parseInt( elmt[i], 10 ); //don't forget to add the base
}

var avg = sum/elmt.length;

document.write( " The average is: " + avg );
</script> */}

const Home = (props) =>{
	return (
		<div>
				
				<div class="container" className="profile">
  <div class="row">
    <div class="col-md" className="userImage" className="test">
	<p>{props.auth.username}</p>
  <div class="fileinput fileinput-new" data-provides="fileinput">
    <span class="btn btn-default btn-file"><span>Choose file</span><input type="file" /></span>
    <span class="fileinput-filename"></span><span class="fileinput-new">No file chosen</span>
</div>

    </div>
	
    <div class="col-md-6" className="Questionaire" className="test">
sign up questionaire
    </div>
  </div>
  <div class="row">
  <div class="col" className="rate" className="test">
  
  <h3>Rate The User</h3>
  <div class="btn-group">
    <button type="button" class="btn btn-primary">1</button>
    <button type="button" class="btn btn-primary">2</button>
    <button type="button" class="btn btn-primary">3</button>
	<button type="button" class="btn btn-primary">4</button>
    <button type="button" class="btn btn-primary">5</button>
  </div>
      </div>
    <div class="col" className="others" className="test"> 
    other users
    </div>
    <div class="col" className="savedarticles" className="test">
    saved articles
    </div>
    </div>

    <div class="row" className="savedArticles" className="test">
    health related articles
    </div>
  </div>
  </div>
			
	);
}

export default Home;