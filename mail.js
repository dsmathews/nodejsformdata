const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
    from: 'smathewsbd@gmail.com',
    to: 'darrell.mathews@mga.edu',
    subject: 'Testing ALumni Form',
    text: 'This is a test of the Alumni form. If a person had actually sent the data it would be here.'
}

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('An error has occurred.')
    }
    else {
        console.log('Message sent.')
    }
})