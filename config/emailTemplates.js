const client_origin = process.env.CLIENT_ORIGIN;
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");

//Welcome-file-template
const welcomefilePath = path.join(__dirname, "./emailTemplates/welcome.html");
const welcomeSource = fs.readFileSync(welcomefilePath, "utf-8").toString();
const welcomeTemp = handlebars.compile(welcomeSource);

//Forgot-password-template
const forgotFilePath = path.join(__dirname, "./emailTemplates/forgotPswd.html");
const forgotSource = fs.readFileSync(forgotFilePath, "utf-8").toString();
const forgotTemp = handlebars.compile(forgotSource);

//Email Templates or Email subject and body
module.exports = {
  //confirm-email-template
  confirmEmailTemp: (id, name) => ({
    subject: `SNAPTURE WELCOME ${name}`,
    html: welcomeTemp({
      name,
      id,
      clientOrigin: client_origin,
    }),
    attachments: [
      {
        filename: "image-1.png",
        path: `${__dirname}/emailTemplates/images/image-1.png`,
        cid: "image1",
      },
      {
        filename: "image-2.png",
        path: `${__dirname}/emailTemplates/images/image-2.png`,
        cid: "image2",
      },
      {
        filename: "image-3.jpeg",
        path: `${__dirname}/emailTemplates/images/image-3.jpeg`,
        cid: "image3",
      },
      {
        filename: "image-4.png",
        path: `${__dirname}/emailTemplates/images/image-4.png`,
        cid: "image4",
      },
      {
        filename: "image-5.png",
        path: `${__dirname}/emailTemplates/images/image-5.png`,
        cid: "image5",
      },
      {
        filename: "image-6.png",
        path: `${__dirname}/emailTemplates/images/image-6.png`,
        cid: "image6",
      },
      {
        filename: "image-7.png",
        path: `${__dirname}/emailTemplates/images/image-7.png`,
        cid: "image7",
      },
      {
        filename: "image-8.png",
        path: `${__dirname}/emailTemplates/images/image-8.png`,
        cid: "image8",
      },
    ],
  }),

  //Forgot-pswd-template
  forgotPswdTemp: (token, name) => ({
    subject: "SNAPTURE: Password Reset",
    html: forgotTemp({
      clientOrigin: client_origin,
      token,
    }),
    attachments: [
      {
        filename: "image-4.png",
        path: `${__dirname}/emailTemplates/images/image-4.png`,
        cid: "image4",
      },
    ],
  }),

  //pswd-change-template
  pswdChangeTemp: (name, email) => ({
    subject: "Your password has been changed",
    text:
      `Hello, ${name} \n\n` +
      `This is a confirmation that the password for your account ${email} \n` +
      " has just been changed.\n",
  }),

  //Email Feedback template
  feedbackTemplate: (name, email, description) => ({
    subject: "SNAPTURE FEEDBACK",
    html: `
      <h2>Feedback submitted by user ${name}</h2>
      <h2>Details</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Description: ${description}</p>
    `,
  }),
};
