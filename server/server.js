var express = require('express')
var app = express()
var fs = require('fs')

var user = {
    "user1" : {
        "name" : "sara"
    }
}

app.post('/upload', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse(data)
        data["user1"] = user["user1"]
        console.log(data)
        res.end(JSON.stringify(data)) 
    })
})

var server = app.listen(8080, function() {
    var host = server.address().address 
    var port = server.address().port 
    console.log("Listening at http://%s:%s", host, port)
})