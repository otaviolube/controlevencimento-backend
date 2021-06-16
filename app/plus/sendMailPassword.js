module.exports.templatePassword  = function(lang, name, email, password, company){
    var msg = '';
    if(lang == "pt"){
        msg += '<h3>Olá, '+ name +'<br></h3>';
        msg += '<br>Segue abaixo a sua senha provisoria de acesso ao sistema Compet Action Web.';
        msg += '<br><b>E-mail:</b>'+ email;
        msg += '<br><b>Senha:</b>'+ password;
        msg += "<br><br><a href='http://26.85.163.62:5000/"+company+"'> <b>Acesso ao sistema</b></a>";
    }else{
        msg += '<h3>Olá, '+ name+'</h3><br>';
        msg += '<br>Below is your provisional password to access the Compet Action Web system.';
        msg += '<br><b>E-mail:</b>'+ email;
        msg += '<br><b>Senha:</b>'+ password;
        msg += "<br><br><a href='http://26.85.163.62:5000/"+company+"'> <b>Acesso ao sistema</b></a>";
    }
    return msg;
}