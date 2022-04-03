const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 5000;

app.use("/part1", require("./routes/q1"));

// Server static assests in production
if ( process.env.NODE_ENV === 'production' ) {
	// set static folder
	app.use(express.static('client/build'));

	app.get('*' , (req , res) => {
		res.sendFile(path.resolve(__dirname , 'client' , 'build' , 'index.html'))
	});	
}

app.listen(PORT, () => {
  console.log(`Server started on PORT : ${PORT}`);
});
