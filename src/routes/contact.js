import nodemailer from 'nodemailer';

// TODO: switch out test email account with actual holiday traditions account

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({ request }) {
	const data = await request.formData();

	const name = await data.get('name');
	const email = await data.get('email');
	const subject = await data.get('subject');
	const message = await data.get('message');

	// Generate test SMTP service account from ethereal.email
	// Only needed if you don't have a real mail account for testing
	let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: testAccount.user, // generated ethereal user
			pass: testAccount.pass // generated ethereal password
		}
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: `"${name}" <${email}>`, // sender address
		to: `test@example.com, test2@example.com`, // list of receivers
		subject: subject, // Subject line
		text: message // plain text body
	});

	console.log('Message sent: %s', info.messageId);

	// Preview only available when sending through an Ethereal account
	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

	return {};
}
