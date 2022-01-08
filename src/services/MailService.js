require('dotenv').config({
    path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env'
});

const nodemailer = require('nodemailer');

console.log(process.env.MAIL_USER);

class MailService {
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: process.env.MAIL_SECURE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            },
            tls: { rejectUnauthorized: false }
        });
    }
    
    async sendMail(from, to, subject, text, html){
        try{
            let info = await this.transporter.sendMail({
                from: from,
                to: to,
                subject: subject,
                text: text,
                html: html
            });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }catch(error){
            console.log(error);
        }
    }
    
    async sendTestMail(from, to, subject, text, html){

        const testAccount = await nodemailer.createTestAccount();
        
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            },
        });

        try{
            let info = await transporter.sendMail({
                from: from,
                to: to,
                subject: subject,
                text: text,
                html: html
            });
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }catch(error){
            console.log(error);
        }
    }
}


module.exports = new MailService();