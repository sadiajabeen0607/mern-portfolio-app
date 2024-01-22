const nodemailer = require("nodemailer");

const sendEmailConttroller = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide all Fields",
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587,
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const info = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Regarding Mern Portfolio App",
      html: `
            <h5> Detail Information</h5>
            <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
            `,
    };

    transporter.sendMail(info, (result) => {
      return res.status(200).send({
        success: true,
        message: "Your Message Send Successfully",
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailConttroller };
