const USER = require("../models/user");
const AWS = require("aws-sdk");
const jwt = require("jsonwebtoken");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1"
});

const ses = new AWS.SES({ appVersion: "2010-12-01" });

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  // Check if User is in db
  USER.findOne({ email: email }).exec((_err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is taken"
      });
    }

    // generete user JWT token for auth
  });
  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: [email]
    },
    ReplyToAddresses: [process.env.EMAIL_TO],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<html><body><h1>${name}</h1><p>!!!!You just hit end point!!!</p><p?>Your Password: ${password}</p?</body></html>`
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Complete Your Registration"
      }
    }
  };

  const sendEmailOnRegistration = ses.sendEmail(params).promise();

  sendEmailOnRegistration
    .then(data => {
      console.log(`Email submitet to SES: ${JSON.stringify(data)}`);
      res.send("Email Sent");
    })
    .catch(err => {
      console.log(`Error SES email:  Message: ${err}`);
      res.send("Email Failed");
    });
};
