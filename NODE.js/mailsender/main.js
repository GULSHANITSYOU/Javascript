require("nodeemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "gulshanitsyou@gmail.com",
      pass: "Gulsh@n20++",
    },
  });

  const mailOptions = {
    from: "gulshanitsyou@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};


