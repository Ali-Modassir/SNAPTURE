const client_origin = process.env.CLIENT_ORIGIN;

//Email Templates or Email subject and body
module.exports = {
  //confirm-email-template
  confirmEmailTemp: (id, name) => ({
    subject: `SNAPTURE: WELCOME ${name}`,
    html: `
            <h3>Hello, ${name}</h3>
            <br>
            <p>
              <br>You are receiving this because you have successfully registered to use Snapture by Modassir Ali.
              <br>Please <a href='${client_origin}/auth/confirm/${id}'> CLICK HERE</a> to confirm your email address
              <br>or Copy and paste this link: ${client_origin}/auth/confirm/${id} in your browser to complete the authentication process
            </p>
            <br/>
            <h5>THANK YOU</h5>
            <h5>Modassir Ali</h5>
          `,
  }),

  //Forgot-pswd-template
  forgotPswdTemp: (token, name) => ({
    subject: "SNAPTURE: Password Reset",
    html: `
          <h2>Hello, ${name}</h2>
          <p><br>You are receiving this because you have requested the reset of the password for your account.
             <br>Please <a href='${client_origin}/auth/reset/${token}'> CLICK HERE</a>
             <br>Please click on the following link, or paste this into your browser to complete the process:
             <br>${client_origin}/auth/reset/${token}
             <br>
             If you did not request this, please ignore this email and your password will remain unchanged
          </p>
          <br/>
          <h5>THANK YOU</h5>
          <h5>Modassir Ali</h5>
          `,
  }),

  //pswd-change-template
  pswdChangeTemp: (name, email) => ({
    subject: "Your password has been changed",
    text:
      `Hello, ${name} \n\n` +
      `This is a confirmation that the password for your account ${email} \n` +
      " has just been changed.\n",
  }),
};
