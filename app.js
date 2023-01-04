const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 6969;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('home');
})
app.get('/create', (req,res)=>{
    res.render('create');
})
app.get('/login', (req,res)=>{
    res.render('login');
})


app.listen(PORT, () =>{
    console.log("server is running on port " + PORT);
})