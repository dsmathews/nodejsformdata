//import modules.
const express = require('express');
const path = require('path');
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
    console.log('Data', req.body);
    res.json({message: 'Message received!!!!!'});
});

//create route to get file.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    //res.sendFile(path.join(__dirname, 'public', 'formfunctions.js'))
});

//activate port for server to use to listen for traffic.
app.listen(PORT, () => log('Server is starting on PORT, ', 3000));
