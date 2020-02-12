const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '0af1c342dcfbd94c5d772154f74969ca-52b6835e-7424b526',
        domain: 'sandbox78486cfaeb0c4ad9bef4405e491a1724.mailgun.org'
    }
};


const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (fName, lName, suffix, phone, email, gradYear, concentration, jobTitle, employer, photo, jobDescription, whatFromMGA, bio, cb) => {
    
    // const filename = photo.files[0].name;

    const mailOptions = {
        from: email,
        to: 'darrell.mathews@mga.edu',
        subject: 'Successful Alumni Form Submission',
        html: `
        <h2>${fName} ${lName}, ${suffix}</h2>
        <ul>
        <li>Phone: ${phone}<li>
        <li>Email: ${email}<li>
        <li>Graduation: ${gradYear}<li>
        <li>Degree Concentration: ${concentration}<li>
        </ul>
        <br />
        <ul>
        <li>Employer: ${employer}<li>
        <li>Job Title: ${jobTitle}<li>
        </ul>
        <br />
        <h4><b>Job Description</b></h4>
        <p>${jobDescription}</p>
        <br />
        <h4><b>How did MGA help you to become successful?</b></h4>        
        <p>${whatFromMGA}</p>
        <br />
        <h4><b>Biography</b></h4>
        <p>${bio}</p>`,
        // attachment: [{filename: filename, path: }]
    }
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null)
        }
        else {
            cb(null, data)
        }
    })

}

module.exports = sendMail;
