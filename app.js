const buttons = [
  {
    name: "create",
    img: "imagesADD.jpg",
  },
  {
    name: "delete",
    img: "imagesDELETE.jpg",
  },
  {
    name: "open",
    img: "imagesopen.png",
  },
];
let tasks = [
  {
    taskName: "",
    id: 0,
  },
];

let categories = [
  {
    nameCat: "Categorie one",
    num: "0",
  },
];

const tasksId = document.getElementById("ListOfTasks");
const catId = document.getElementById("ListOfCat");
const btnAdd = document.getElementById("add");

//gives the date
function getDate() {
  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  document.getElementById("date").textContent = date;
}
getDate();

//todo add a loop to redo this when smth changed/added/deleted on page
//counts categories
var cntCat = catId.childElementCount;
console.log(cntCat);
document.getElementById("cntAll").innerHTML = cntCat;

//id for the tasks
var idCat = -1;
function createIdLiTask() {
  return idCat++;
}
//id for openButtons
var idOpen = -1;
function createIdOpen() {
  return idOpen++;
}

//if you press the ADD button
btnAdd.addEventListener("click", function () {
  // Create LiCatElement
  const newCat = document.createElement("li");
  // Create the openButton for the element and the img for it
  const openBu = document.createElement("button");
  const openBuImg = document.createElement("img");
  //  Set ID attribute on element and the button
  newCat.setAttribute("id", createIdLiTask());
  openBu.setAttribute("id", createIdOpen());
  openBu.setAttribute("type", "button");
  openBuImg.setAttribute("src", "images/open.png");
  openBuImg.setAttribute("alt", "open up");
  // Add text content to element
  var newCatName = window.prompt("Name the Task Category");
  newCat.innerHTML = newCatName;
  // Or newCat.innerHTML = `<span>Hello world</span>`;
  //  add element to DOM
  catId.appendChild(newCat);
  newCat.appendChild(openBu);
  newCat.appendChild(openBuImg);
});

//save all the categorie in a list
/*for (let i = 0; i <= cntCat; i++) {
  categories.nameCat[i] = "1";
  //document.getElementById("ListOfCat").firstElementChild;
}
console.log(categories);
*/

//interaction with open button todo
/*document.getElementById("open").addEventListener("click", function () {
  console.log("the open is clicked");
});
*/
