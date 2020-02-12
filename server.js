//import modules.
const express = require('express');
const path = require('path');
const sendMail = require('./mail');
// const bodyParser = require('body-parser');

//initiate global variables.
const log = console.log;
const app = express();
const PORT = 3000;

//Static Folder
app.use('/public', express.static(path.join(__dirname, 'public')))

//Data Parsing
// app.use(bodyParser.urlencoded({
//     extended: false,
// }))
// app.use(bodyParser.json());

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
    //send email here
    const {fName, lName, suffix, phone, email, gradYear, concentration, jobTitle, employer, photo, jobDescription, whatFromMGA, bio} = req.body;
    console.log(req.body)
    sendMail(fName, lName, suffix, phone, email, gradYear, concentration, jobTitle, employer, photo, jobDescription, whatFromMGA, bio, function(err, data){
        if (err) {
            res.status(500).json({message: err})
        }
        else {
            res.json({message: 'Email sent!!!!!!'})
        }
    });
    res.json({message: 'Message received!!!!!'});
});

//create route to get file.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//activate port for server to use to listen for traffic.
app.listen(PORT, () => log('Server is starting on PORT, ', 3000));
