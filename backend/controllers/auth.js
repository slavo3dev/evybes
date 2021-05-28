const USER = require("../models/user");
const AWS = require("aws-sdk");
const jwt = require("jsonwebtoken");
const registerEmailParams = require("../helpers/email");

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
        error: "Email is taken already!!"
      });
    }
    // generete user JWT token for auth
    const token = jwt.sign({ name, email, password }, process.env.JWT_ACCOUNT_ACTIVATION, { expiresIn: "10m" });

    // send email
    const params = registerEmailParams(email, token);

    const sendEmailOnRegistration = ses.sendEmail(params).promise();

    sendEmailOnRegistration
      .then(data => {
        console.log(`Email submitet to SES: ${JSON.stringify(data)}`);
        res.json({
          message: `The email has been sent to ${email} for the instructions to complete your registration`
        });
      })
      .catch(err => {
        console.log(`Error SES email:  Message: ${err}`);
        res.json({
          message: "We could not verfy your email, please try again"
        });
      });
  });
};
