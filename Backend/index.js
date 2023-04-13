const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//Models
const User = require('./dataSchema');

// Port
const port = 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// database connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.o8lqsks.mongodb.net/?retryWrites=true&w=majority');

app.post('/insert', async (req, res) => {
    const FirstName = req.body.fName
    const lastName = req.body.lName
    const email = req.body.email
    const contact = req.body.phone
    const designation = req.body.designation
    const gender = req.body.gender
    const password = req.body.password
    const confirmPassword = req.body.cpassword


    const formData = new User({
        firstName: FirstName,
        lastName: lastName,
        email : email,
        contact : contact,
        designation : designation,
        gender : gender,
        password : password,
        confirmPassword : confirmPassword
    })
    
    
    await formData.save();
    
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})