const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const User = require('./models/registers');
require('./db/conn')

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '../public');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path))
app.set("view engine", "hbs");

app.get('/', (req, res) => {
    res.render("index");
})

// app.get('/', (req, res) => {
//     res.send("welcome");
// })


app.get("/register", (req, res) => {
    res.render("register");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/courses", (req, res) => {
    res.render("courses");
})

app.get("/popularCourses", (req, res) => {
    res.render("popularCourses");
})


app.get("/courseInside", (req, res) => {
    res.render("courseInside");
})

app.get("/content", (req, res) => {
    res.render("content");
})

app.get("/accounts", (req, res) => {
    res.render("accounts");
})

app.get("/subscription", (req, res) => {
    res.render("subscription");
})

app.get("/payment", (req, res) => {
    res.render("payment");
})

app.get("/invoices", (req, res) => {
    res.render("invoices");
})

app.get("/workshops", (req, res) => {
    res.render("workshops");
})


app.post("/register", async (req, res)=> {

    try{
        const data = new User({
              firstname : req.body.firstname,
        secondname : req.body.secondname,
        emailtext : req.body.emailtext,
        password : req.body.password,
        confirmpassword : req.body.confirmpassword,
        })
       const registered = await data.save();
       res.render("index");
    }
    catch(err)
    {
        res.status(400).send(err);
    }
    
})

app.post("/login", async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
       const user = await User.findOne({emailtext: email});
       
       if(user.password == password)
       {
           res.render('courses')
       }
       else
       {
           alert("wrong credentials");
       }
    }
    catch(err){
        res.status(404).send(err);
    }
})




app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})