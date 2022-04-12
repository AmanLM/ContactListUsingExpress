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

var contactList = [
    {
        name: "Aman",
        phone: "9307144887"
    },
    {
        name: "Kartik",
        phone: "9307144812"
    },
    {
        name: "Tanmay",
        phone: "9307144876"
    },
    {
        name: "Gaurav",
        phone: "9307144886"
    },
    {
        name: "Arun",
        phone: "9307144888"
    }
]

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

// app.get('/practice', function (req, res) {
//     return res.render('practice', { title: "PlayGround", age: 16 });
// })

app.post('/create-contact', function (req, res) {

    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function (err, newContact) {
        if (err) {
            console.log("Error, Contact has not been created");
            return;
        }
        console.log("******", newContact);
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