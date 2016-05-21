/*Opportunity project*/

//grabs the EIH intrests links and puts them into the variable myLinks
var myLinks = [];
$(".Col-Links a").each(function(index,value)
                     {
                       myLinks[index] = value;
                       
                       
                     })
//myLinks is an array that contains the EIH links on the QuickSearch.jsp page
//testing commit again!
console.log(myLinks[1]);