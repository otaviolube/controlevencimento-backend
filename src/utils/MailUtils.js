const path = require('path');
const fs = require("fs")
const handlebars = require('handlebars');

class MailUtils {
    constructor() {
        this.emailTemplateSource = "";
        this.template = "";
        this.htmlToSend = "";
    }

    getMailTemplate(type, context) {
        if (type === 'email') {
            this.emailTemplateSource = fs.readFileSync(path.resolve(__dirname, '../', 'templates', 'ForgotPasswordTemplate.hbs'), "utf8");
            this.template = handlebars.compile(this.emailTemplateSource);
            this.htmlToSend = this.template(context);
            return this.htmlToSend;
        }
    }
}

module.exports = new MailUtils();