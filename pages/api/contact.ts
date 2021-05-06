import type { NextApiRequest, NextApiResponse } from "next";
import sanitizeHtml from "sanitize-html";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

type Data = {
	success: boolean;
	message: string;
};

export default function contactHandler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === "POST") {
		try {
			const { name = "", email = "", subject = "", message = "" } = req.body;
			const sanitizedName = sanitizeHtml(name.toString());
			const sanitizedEmail = sanitizeHtml(email.toString());
			const sanitizedSubject = sanitizeHtml(subject.toString());
			const sanitizedMessage = sanitizeHtml(message.toString());

			const transporter: Mail = nodemailer.createTransport({
				port: 465,
				host: "smtp.gmail.com",
				auth: {
					type: "login",
					user: process.env.BURNER_EMAIL,
					pass: process.env.PASSWORD
				},
				secure: true
			});
			const mailData: Mail.Options = {
				from: process.env.BURNER_EMAIL,
				to: process.env.EMAIL,
				subject: `Message from ${sanitizedName} - ${sanitizedSubject}`,
				text: `${sanitizedMessage}\n\n ${sanitizedName} - ${sanitizedEmail}`
			};
			transporter.sendMail(mailData, function (err, info) {
				if (err) {
					console.log(`${err.name}\n${err.message}`);
				}
			});

			res.status(200).json({ success: true, message: "Email has been sent." });
		} catch (err) {
			res.status(500).json({
				success: false,
				message: err.message
			});
		}
	} else {
		res.status(400).json({
			success: false,
			message: "Bad request. This server only handles POST methods."
		});
	}
}
