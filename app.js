const Buttons = [
 {
  name:'create',
  img:'images\ADD.jpg'
 },
 {
  name:'delete',
  img:'images\DELETE.jpg'
 },
 {
    name:'open',
    img:'images\open.png'
 }
]

var today = new Date();
var date = today.getDate() +'/'+(today.getMonth()+1) +'/' + today.getFullYear();
document.getElementById("date").innerHTML = date;



var ol = document.getElementById("ListOfCategories");
var liNodes = [];
for(var i= 0; i<ol.childNodes.length; i++){
   if(ol.childNodes[i] == "li"){
      liNodes.push(ol.childNodes[i]);
      console.log(liNodes);
   }
}


