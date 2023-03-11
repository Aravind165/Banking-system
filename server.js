const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/",{
    dbName: "bank",
    useNewUrlParser: true,
    useUnifiedTopology: true,
},);

const accounts = {
    acc_no : Number,
    Name: String,
    balance: Number
}

const Bank = mongoose.model('bank', accounts);
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.get("/about", function(req, res) {
     {
        res.sendFile(__dirname+"/about.html")
    }
});

app.get("/index", function(req, res) {
    {
       res.sendFile(__dirname+"/index.html")
   }
});



app.listen(4000, function() {
    console.log('server is running');
})