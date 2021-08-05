const nodemailer = require("nodemailer");

// The credentials for the email account you want to send mail from.
const credentials = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(credentials);

module.exports = async (to, content) => {
  // The from and to addresses for the email that is about to be sent.
  const contacts = {
    from: process.env.MAIL_USER,
    to,
  };

  // Combining the content and contacts into a single object that can be passed to Nodemailer.
  const email = Object.assign({}, content, contacts);
  await transporter.sendMail(email);
};
