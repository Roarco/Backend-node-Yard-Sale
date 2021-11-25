
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // Generate test SMTP service account from ethereal.email

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true, // true for 465, false for other ports
    port: 465,
    auth: {
        user: 'sebuscaroberh@gmail.com',
        pass: 'rjbfgvdakyivmtxu'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'sebuscaroberh@gmail.com', // sender address
    to: "sebuscaroberth@gmail.com", // list of receivers
    subject: "este correo se envio desde node js ✔", // Subject line
    text: "Dios es poderoso?", // plain text body
    html: "<b>Dios es poderoso?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMail().catch(console.error);

