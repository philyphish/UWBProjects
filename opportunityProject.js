var myLinks = [];
$(".Col-Links a").each(function(index,value)
                     {
                       myLinks[index] = value;
                       //the img src plus the index will grab the appropriate picture for the link
                       //change the ip address to the server/directory where your pictures are stored
                       $(myLinks[index]).append("<br/><a href='"+myLinks[index]+"'><img src='http://71.47.212.199:8080/EIH"+index+".png'></a>");
                       
                     })