/*Opportunity project*/

//grabs the EIH intrests links and puts them into the variable myLinks
var myLinks = [];
$(".Col-Links a").each(function(index,value)
                     {
                       myLinks[index] = value;
                       
                       
                     })
//myLinks is an array that contains the EIH links on the QuickSearch.jsp page
//inserts a picture into the link, below is a test picture
$(myLinks[0]).append("<br/><a href='"+myLinks[0]+"'><img src='https://avatars3.githubusercontent.com/u/4255604?v=3&u=2b2e2dd89230fc338014de8a947af9be54727088&s=140'></a>");