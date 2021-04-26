const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION
});

const ses = new AWS.SES({ appVersion: "2010-12-01" });

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email]
    },
    ReplyToAdresses: process.env.EMAIL_TO,
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html><body><h1>${name}</h1><p>!!!!You just hit end point!!!</p></body></html>`
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Complete Your Registration"
      }
    }
  };

  const sendEmailOnRegistration = ses.sendEmail(params).promise();

  sendEmailOnRegistration()
    .then(data => console.log(`Email submitet to SES: ${data}`))
    .catch(err => console.log(`Error Message: ${err}`));
};
