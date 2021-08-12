const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smpt.fastmail.com',
      service: 'fastmail',
      port: 456,
      secure: true,
      auth: {
        user: 'bazzar@fastmail.nl',
        pass: 'dw35wzujutmkr595',
      },
    });

    await transporter.sendMail({
      from: 'bazzar@fastmail.nl',
      to: email,
      subject,
      text: `Please click on the following link below to reset your password:\n\n${text}`,
    });

    console.log('Reset email is sent successfully.');
  } catch (error) {
    console.log(error, 'Cannot send reset email.');
  }
};

module.exports = sendEmail;
