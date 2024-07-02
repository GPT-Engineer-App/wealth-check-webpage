import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    const mailOptions = {
      from: "your-email@gmail.com",
      to: "victorroy@gmail.com",
      subject: "Financial Wealth Check Form Submission",
      text: JSON.stringify(data, null, 2),
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}