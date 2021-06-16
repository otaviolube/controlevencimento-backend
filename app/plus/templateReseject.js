module.exports.templateReseject = function(message) {
    var template = "<html>" +
        "<head>" +
        "</head>" +
        "<body>" +
        "<div style=' width: 100%;font-family: sans-serif;'>" +
            " <div style='width:100%'>" + message +  "</div>" +
                "<br>" +
                "<div style='width:100%; text-align:center;'>" +
                    "<img src='http://competaction.com.br/static/img/logoBlue.png' height='42' width='280'> " +
                 "</div>" +
        "</div>"+
        "</body>" +
        "</html>";
    return template;
}