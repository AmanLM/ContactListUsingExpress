// const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/contact_list_db');//connecting to database

// const db = mongoose.connection;//aquire connection

// db.on('error',console.error.bind(console,'Error connecting to DB'));

// db.once('open',function(){
//     console.log("Successfully Connected");
// });

// module.export = db;


const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/contact_list_db');
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error bind to db'));
db.once('open',function(){
    console.log('successfully connected to database')
})