const express = require("express");
const bodyParser = require("body-parser");

// Basic express setup
const app  = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Define some routes
const router = express.Router();
router.get("/greetings", function(req, res){
    res.status(200).send({name: "Otpi", greetings: "How are you!"});
});

// Let Express use the routes as API endpoints
app.use("/api", router);

// Send Not found for everything else
app.get("*", function(req, res){
    res.status(404).send({result: "NOT FOUND"});
});

// Finally start listening
const port = process.env.port || 3000;
app.listen(port, function(){
    console.log("Started listening at port" + port);
});