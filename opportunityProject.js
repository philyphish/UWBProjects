var myLinks = [];
$(".Col-Links a").each(function(index,value)
     {
    	 myLinks[index] = value;
         $(myLinks[index]).append
         //loop through each EIH link and add a picture to each
         //next try to add different picture to each EIH link
         ("<br/><a href='"+myLinks[index]+"'><img src='https://avatars3.githubusercontent.com/u/4255604?v=3&u=2b2e2dd89230fc338014de8a947af9be54727088&s=140'></a>");
                       
     })