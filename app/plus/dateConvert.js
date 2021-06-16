module.exports.convert = function(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return day + '/' + month + '/' + year;
}

module.exports.convertNormal = function(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return year + '-' + month + '-' + day;
}

module.exports.telefoneFuncao = function(telefone){
    var ddd = telefone.substr(0, 2);
    if(telefone.length == 11){
        var telInicio = telefone.substr(2, 5);
        var telFim = telefone.substr(7, 4);
    }else{
        var telInicio = telefone.substr(2, 4);
        var telFim = telefone.substr(6, 4);
    }
    return "("+ddd+") "+telInicio+"-"+telFim;
}