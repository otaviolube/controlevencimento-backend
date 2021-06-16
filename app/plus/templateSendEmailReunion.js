module.exports.templateAction = function(message, actions, signature, source) {
    var template = "<html>" +
        "<head>" +
        "</head>" +
        "<body style='background:rgb(238, 238, 238);'>" +
        "<div style=' width: 100%;font-family: sans-serif;border-radius:0.5em;background: rgb(245, 245, 245);border: 1px solid #e0e0e0;box-shadow: 0px 4px 5px -1px #989898;'>" +
        "<br>" +

        " <div style='width:100%'>" +
        "<p style='text-align:center;'> <b>Mensagem:</b> " + message + "</p>" +
        "</div>" +
        "<br>" +

        " <div style='width:100%'>" +
        " <p style='text-align:center;'>Responda todas as ações que estão pendentes e encaminhas para você <a href='http://competaction.com.br/acoes/followup/" + source.userId + "/" + source.token + "/" + source.groupProject + "/" + source.projects + "/" + source.situation + "/" + source.priority + "/" + source.category + "/" + source.somenteAt + "/" + source.company + "'>clicando aqui</a>" +
        "</div>" +
        "<br>" +
        "<table style='border-collapse: collapse' id='dataTable' width='100%' cellspacing='0'>" +
        "<thead>" +
        "<tr style='text-align: center;background: #2e6da4 !important;color: white !important; height:40px;'" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Id</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Projeto</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Área</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Origem</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Solicitante</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Data Solicitação" +
        "</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Ação</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Responsável</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Plan</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Replan</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Real</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Prioridade</th>" +
        "<th style='border: 1px solid; vertical-align: middle; font-size: 14px;'>Situação</th>" +
        "</tr>" +
        "</thead>" +
        "<tbody style='background:#FFFFFF;'>";

    for (var i = 0; i < actions.length; i++) {
        template += "<tr style='border: 1px solid black;'>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].id + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].projectName + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].areaName + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].source + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].requester + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].date_request + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].action + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].responsible + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].date_plan + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].date_replan + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].date_real + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].priority + "</th>" +
            "<td scope='row' style='border: 1px solid black;'>" + actions[i].situation + "</th>" +
            "</tr>";
    }

    template += "</tbody>" +
        "</table>" + "<br>" +
        "<br><hr style='border: 0;height: 0;box-shadow: 0 0 5px 1px rgb(173, 173, 173);'><br>" +
        "<div style='width:100%; text-align:center;'>" +
        "<img src='http://competaction.com.br/static/img/logoBlue.png' height='42' width='280'> " +
        "</div>" +
        "</div> </div>" +
        "</body>" +
        "</html>";
    return template;
}