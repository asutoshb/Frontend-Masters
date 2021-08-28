const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/signup", {
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology : true,
    useFindAndModify : false,
}).then(() =>{
    console.log("connection successful");
}).catch((err) =>{
    console.log("connection error");
})