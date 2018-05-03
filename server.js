var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response) {
    response.render('index');
})

app.get('/cats', function(request, response) {
    response.render('cats');
})

app.get('/cuddles', function(request, response) {
    var cats_array = [
        {name: "Cuddles", favefood: "spaghetti", age: 2, spots:["under the bed", "in a sunbeam"], image: "/images/cat1.jpg"}
    ]
    response.render('details', {cats: cats_array});
})

app.get('/boomer', function(request, response) {
    var cats_array = [
        {name: "Boomer", favefood: "can food", age: 4, spots:["in the bathroom", "under the table"], image: "/images/cat2.jpg"}
    ]
    response.render('details', {cats: cats_array});
})

app.get('/clay', function(request, response) {
    var cats_array = [
        {name: "Clay", favefood: "rice", age: 3, spots:["on the couch", "somewhere hidden"], image: "/images/cat3.jpg"}
    ]
    response.render('details', {cats: cats_array});
})

app.listen(8000, function() {
    console.log("server is running");
})




