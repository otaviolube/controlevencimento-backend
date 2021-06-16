module.exports.templateAction  = function(action, note){
    var template = "<html>" +
    "<head>" +
	"</head>" +
    "<body style='background:rgb(238, 238, 238);'>"+
        note+
        "<br><p> Ação: "+action+" <br> foi negada favor verificar no sistema</p>" + 

	"</body>"+
	
"</html>";

return template;
}