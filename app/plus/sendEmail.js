const nodemailer = require('nodemailer');
var cron = require('node-cron');

module.exports.sendMail = function(host, port, user, pass, secure, to, template, copy, copyOc, project) {
    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure, // true para 465, false para outras portas 
        auth: {
            user: user,
            pass: pass
        },
        tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
        from: user,
        to: to,
        cc: copy,
        bcc: copyOc,
        subject: 'Follow-Up  de Ações - (Projeto: '+project+')',
        html: template
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('-----error----->',error)
        } else {
            console.log('----info------ >',info)
        }
    });
}

module.exports.sendMailReseject = function(host, port, user, pass, secure, to, template, assunto) {
    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure, // true para 465, false para outras portas
        auth: {
            user: user,
            pass: pass
        },
        tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
        from: user,
        to: to,
        subject: assunto,
        html: template
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('-----error----->',error)
            return false;
        } else {
            console.log('----info------ >',info)
            return true;
        }
    });
}


module.exports.sendMailNotificacao = function(host, port, user, pass, secure, to, template, assunto) {
    console.log('entrou', host, port, user, pass, secure, to, template, assunto)
    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure, // true para 465, false para outras portas
        auth: {
            user: user,
            pass: pass
        },
        tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
        from: user,
        to: to,
        subject: assunto,
        html: template
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(info)
            return info
        }
    });
}



module.exports.sendEmailRecuperacao = function(host, port, user, pass, secure, to, template, assunto) {
    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure, 
        auth: {
            user: user,
            pass: pass
        },
        tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
        from: user,
        to: to,
        subject: assunto,
        html: template
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(' (error) ----------------------->',error)
            return false
        } else {
            console.log(' (info) ----------------------->',info)
            return true
        }
    });
}

module.exports.sendMailAta = function(host, port, user, pass, secure, to, template, copy, copyOc, assunto) {
    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure, // true para 465, false para outras portas
        auth: {
            user: user,
            pass: pass
        },
        tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
        from: user,
        to: to,
        cc: copy,
        bcc: copyOc,
        subject: assunto,
        html: template
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(info)
        }
    });

}

module.exports.sendMailTeste = function(host, port, user, pass, secure, to, template, copy, copyOc, assunto) {

    const transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure: secure, // true para 465, false para outras portas
        auth: {
            user: user,
            pass: pass
        },
        tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
        from: user,
        to: to,
        cc: copy,
        bcc: copyOc,
        subject: assunto,
        html: template
    };


    cron.schedule('* * * * *', () => {
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log(info)
            }
        });
    });

}

