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



var olCNTCategories = document.getElementById("ListOfCategories").childElementCount;
console.log(olCNTCategories);
document.getElementById("cntAll").innerHTML = olCNTCategories;



