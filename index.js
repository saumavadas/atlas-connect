var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://saumavadas:Welcome@123@cluster0.bpg73.gcp.mongodb.net/trial01?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true,}); 

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));
 
db.once('open', function() 
{
	console.log("Successfully connected to MongoDB!");
	mongoose.connection.db.listCollections().toArray(function (err, names) 
	{
		console.log(names);
	});
});

/*install (start)
 * yarn init
 * yarn add mongoose
 * (To start)node index.js
 */
