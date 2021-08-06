const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject,
      text,
    });

    console.log('Reset email is sent successfully.');
  } catch (error) {
    console.log(error, 'Cannot send reset email.');
  }
};

module.exports = sendEmail;
