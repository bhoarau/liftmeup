var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Rate = new Schema({
	1: {
		type: string,
	},
	2: {
		type: String,
	},
	3: {
		type: String,
	},
	4: {
		type: String,
		default: false
	},
	5: {
		type: String,
		
	}, 
});
module.exports = mongoose.model('rate', Rate);
// this is the start to  rate formula
// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Statements</h2>


// <p id="demo"></p>

// <script>
// var elmt = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// var sum = 0;
// for( var i = 0; i < elmt.length; i++ ){
//     sum += parseInt( elmt[i], 10 ); //don't forget to add the base
// }

// var avg = sum/elmt.length;

// document.write( " The average is: " + avg );
// </script>

// </body>
// </html>
