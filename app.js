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

//gives the date
var today = new Date();
var date = today.getDate() +'/'+(today.getMonth()+1) +'/' + today.getFullYear();
document.getElementById("date").innerHTML = date;

//counts categories
var olCNTCategories = document.getElementById("ListOfCategories").childElementCount;
console.log(olCNTCategories);
document.getElementById("cntAll").innerHTML = olCNTCategories;

//interaction with open button todo
document.getElementById("open").addEventListener('click',function(){
console.log("the open is clicked");
})


