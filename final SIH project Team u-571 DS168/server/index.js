const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db');
const port = 3000
const app = express();

app.use(bodyParser.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10kb' }));
app.use(cors());



app.get('/getDemo',(req,res)=> {
    res.json({ message : "Hiiii I am in node js"})
})

app.post('/create',(req,res)=> {
    console.log(req.body)
   // console.log(req.params)
    //var post  = {from:'email, mbno, name, pass, usertype', to:'you', msg:'hi'};
    var email =req.body.email;
    var mobile =req.body.mobile;
    var userName = req.body.userName;
    var password = req.body.password;
    var role = req.body.role;
    db.query(`INSERT INTO sihproject.signup(email, mbno, name, pass, usertype) VALUES('${email}', '${mobile}', '${userName}', '${password}', '${role}')`, function(err, result) {
      if (err) throw err;
      res.json({ message : "Succesfully Registered"})
    });
    
})

app.listen(port,() => {
    console.log(`App is listening at port  = ${port}`)
})