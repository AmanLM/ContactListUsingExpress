const mongoose = require('mongoose');

const ContactShema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
});

const Contact = mongoose.model('Contact',ContactShema);

module.exports = Contact;
