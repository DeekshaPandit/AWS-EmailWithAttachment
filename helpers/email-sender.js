const nodemailer =require('nodemailer');
module.exports.sendEmail = function (att) {
    return new Promise((resolve, reject) => {
        var mailOptions = {
            from: 'deekshapandit@outlook.com',
            subject: 'This is an email sent from a Lambda function!',
            html: `<p>You got a contact message from: <b>Hi, open this attachment once.</b></p>`,
            to: 'test2@gmail.com',
            // bcc: Any BCC address you want here in an array,
            attachments: [
                {
                    filename: att.filename,
                    content: att.content
                }
            ]
        };

        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // put your host name/
            port: 587,
            requireTLS: true,
            connectionTimeout: 60000,

            secure: false, // true for 465, false for other ports
            auth: {
                user: 'test@gmail.com',
                pass: 'test@123'
            },
            tls: { rejectUnauthorized: false }
        });
        // send email
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                reject();
            } else {
                resolve(true);
            }
        });
    });
}