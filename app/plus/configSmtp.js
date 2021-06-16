module.exports = function (host, port, user, pass) {
    return {
        host: "smtp.zoho.com",
        port: 465,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "ti@competengenharia.com.br",
            pass: "senhaqualquerdeteste"
        },
        tls: { rejectUnauthorized: false }
    }
}