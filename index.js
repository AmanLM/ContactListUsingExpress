const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
const Contact = require('./models/contact')
const db = require('./Config/mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

app.get('/', function (req, res) {

    Contact.find({},function(err,contacts){
        if(err){
            console.log("Error in accessing!");
            return;
        }

        return res.render('home', {
            title: "ContactList",
            contact_List: contacts
        });
    
    });
})

app.post('/create-contact', function (req, res) {

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function (err, newContact) {
        if (err) {
            console.log("Error, Contact has not been created");
            return;
        }
        return res.redirect('/');
    }
    )
})

app.get('/delete-contact/', function (req, res) {

    let id = req.query.id;

    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error while deleting");
        }
    });
    return res.redirect('back');
})

app.listen(port, function (err) {
    if (err) {
        console.log("Error", err);
    }
    console.log("Running!, It's working");
})