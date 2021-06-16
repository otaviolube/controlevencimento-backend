module.exports.templateAction = function(name, actions, signature, source,projects, projectId) {
    var template = "<html>" +
    "<head></head>" +
    "<body>" +
    "<div style=' width: 100%;font-family: sans-serif;'>" +
        "<div style='width:100%; font-size: 16px;'>" +
            "<p style='text-align:left;'> <b>Prezado(a),</b> "+name+"</p>" +
        "</div>";

        if(source.lang = 'Português'){
            template += " <div style='width:100%'>" +
                    " <p style='text-align:left;'>Responda todas as ações que estão em aberto e encaminhas para você <a href='http://26.85.163.62:5000/acoes/followup/" + source.userId + "/" + source.token + "/" + source.groupProject + "/" + source.projects + "/" + source.situation + "/" + source.priority + "/" + source.category + "/" + source.somenteAt + "/" + source.company +"/pt'>clicando aqui</a>" +
                "</div> <br>";
        }else{
            template += " <div style='width:100%'>" +
                " <p style='text-align:left;'>Respond to all open actions and forward them to you <a href='http://26.85.163.62:5000/acoes/followup/" + source.userId + "/" + source.token + "/" + source.groupProject + "/" + source.projects + "/" + source.situation + "/" + source.priority + "/" + source.category + "/" + source.somenteAt + "/" + source.company + "/en'>clicking here</a>" +
            "</div> <br>";
        }
        if(source.lang = 'Português'){
            template += "<b>Projeto: </b>" + projects +
                "<br>" +
                "<table style='border-collapse: collapse' id='dataTable' width='100%' cellspacing='0'>" +
                "<thead style='color:white; background:#2e6da4;'>" +
                    "<tr style='text-align: center;background: #2e6da4 !important;color: white !important; height:40px;'>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Id</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Projeto</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Área</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Origem</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Solicitante</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;text-align: center;'>Data Solicitação </th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Ação</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Responsável</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;text-align: center;'>Plan</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;text-align: center;'>Replan</th>" +
                        "<th style='padding: 4px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Prioridade</th>" +
                        "<th style='padding: 4px;border: 1px solid; vertical-align: middle; font-size: 14px; background:#2e6da4;'>Situação</th>" +
                        "<th style='background:#2e6da4;'></th>" +
                    "</tr>" +
                "</thead>" +
                "<tbody style='background:#FFFFFF;'>";
        }else{
            template += "<b>Projeto: </b>" + projects +
                "<br>" +
                "<table style='border-collapse: collapse' id='dataTable' width='100%' cellspacing='0'>" +
                "<thead style='color:white; background:#2e6da4;'>" +
                    "<tr style='text-align: center;background: #2e6da4 !important;color: white !important; height:40px;'>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Id</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Project</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Area</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Origin</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Requester</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;text-align: center;'>Request Date </th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Action</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Responsible</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;text-align: center;'>Plan</th>" +
                        "<th style='padding: 5px;border: 1px solid; vertical-align: middle; font-size: 14px;text-align: center;'>Replan</th>" +
                        "<th style='padding: 4px;border: 1px solid; vertical-align: middle; font-size: 14px;'>Priority</th>" +
                        "<th style='padding: 4px;border: 1px solid; vertical-align: middle; font-size: 14px; background:#2e6da4;'>Situation</th>" +
                        "<th style='background:#2e6da4;'></th>" +
                    "</tr>" +
                "</thead>" +
                "<tbody style='background:#FFFFFF;'>";
        }

        for (var i = 0; i < actions.length; i++) {
            template += "<tr style='border: 1px solid black;'>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;'>" + actions[i].id + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;'>" + actions[i].projectName + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;'>" + actions[i].areaName + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;'>" + actions[i].source + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;'>" + actions[i].requester + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;text-align: center;'>" + actions[i].date_request + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;'>" + actions[i].action + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;'>" + actions[i].responsible + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;text-align: center;'>" + actions[i].date_plan + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;text-align: center;'>" + actions[i].date_replan + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;'>" + actions[i].priority + "</td>" +
                            "<td scope='row' style='padding: 4px !important;border: 1px solid black;'>" + actions[i].situation + "</td>" +
                            "<td style='border: 1px solid #ff000000 !important;'></td>"+
                        "</tr>";
        }

    template += "</tbody>" +
            "</table><br><br>"+
            "<br>"  + signature + "" +
    "<div style='width:100%; text-align:center;'>" +
        "<img src='http://26.85.163.62:5000/static/img/logoBlue.png' height='42' width='280'> " +
    "</div> </div> </div> </body> </html>";

return template;
}