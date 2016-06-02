$(document).ready(function(){
var myLinks = [];
$(".Col-Links a").each(function(index,value)
                     {
                       myLinks[index] = value;
                       //index is the number of teh array variable
                       //change the ip address to the server/directory where your pictures are stored
                       $(myLinks[0]).html("<div class='fa fa-graduation-cap' style='font-size:40px;'><span style='font-family:verdana, geneva;'>&nbsp;Education</span></div>");
                       $(myLinks[1]).html("<div class='fa fa-usd' style='font-size:40px;'><span style='font-family:verdana, geneva;'>&nbsp;Income</span></div>");
                       $(myLinks[2]).html("<div class='fa fa-stethoscope' style='font-size:40px;'><span style='font-family:verdana, geneva;'>&nbsp;&nbsp;Health</span></div>");
                       $(myLinks[3]).html("<div class='fa fa-heart-o' style='font-size:40px;'><span style='font-family:verdana, geneva;'>&nbsp;Safty Net</span></div>");
                       
                     })
})

///var/lib/tomcat7/webapps/ROOT
//tomcat directory