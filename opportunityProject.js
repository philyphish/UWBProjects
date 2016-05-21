/*Opportunity project*/

//grabs the EIH intrests links and puts them into the variable myLinks
var myLinks = [];
$(".Col-Links a").each(function(index,value)
                     {
                       myLinks = value;
                      // console.log(myLinks)
                       
                     })
console.log(myLinks);
