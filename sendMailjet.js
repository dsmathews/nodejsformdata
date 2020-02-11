const mailjet = require('node-mailjet')
    .connect('14892115da4fc42f38d20086c965cb8a', '5ddcba0d00083f35efd298f6c5af3bab')
const request = mailjet
    .post("send", { 'version': 'v3.1' })
    .request({
        "Messages": [
            {
                "From": {
                    "Email": "darrell.mathews@mga.edu",
                    "Name": "Darrell"
                },
                "To": [
                    {
                        "Email": "darrell.mathews@mga.edu",
                        "Name": "Darrell"
                    }
                ],
                "Subject": "Greetings from Mailjet.",
                "TextPart": "My first Mailjet email",
                "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                "CustomID": "AppGettingStartedTest"
            }
        ]
    })
request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })
