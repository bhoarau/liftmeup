module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const imagecontroller = require("../controllers/image.js");

	//add any API routes here
router	
	.route("/image")
	.post(imagecontroller.create)
	.get(imagecontroller.findAll)


router
	.route("/image/:id")
	.get(imagecontroller.findById)
	.put(imagecontroller.update)
	.delete(imagecontroller.delete);

	
	// app.use(multer({ dest: "./uploads/",
	// 	rename: function (fieldname, filename) {
	// 	  return filename;
	// 	},
	//    }));

	// app.post("/api/photo",function(req,res){
	// 	var newImage = new Item();
	// 	newImage.img.data = fs.readFileSync(req.files.userPhoto.path)
	// 	newImage.img.contentType = "image/png";
	// 	newImage.save(); 
	//    });

	return router;
};