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

    name: "submit",
    img: "imagessubmit.png",
  },
];
let tasks = [
  {
    taskName: "",
    id: 0,
  },
];
var categories = [
  {
    newCatName: "Health",
    idforCat: "",
  },
  {
    newCatName: "Growth",
    idforCat: "",
  },
];

const tasksId = document.getElementById("ListOfTasks");
const catId = document.getElementById("ListOfCat");
const btnAdd = document.getElementById("add");
const btnDelete = document.getElementById("delete");
const btnSubmit = document.getElementById("submit");
//gives the date
function getDate() {
  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  document.getElementById("date").textContent = date;
}
getDate();

//counts categories and outputs in the title
var cntCat = catId.childElementCount;
document.getElementById("cntCat").innerHTML = cntCat;

//id for the Categories
var idCat = 0;
function createIdLiCat() {
  return "c" + idCat++;
}
//id for openButtons
var idOpen = 0;
function createIdOpen() {
  return "o" + idOpen++;
}

//if you press the ADD button
btnAdd.addEventListener("click", function () {
  window.location.href = "newCategoryForm.html";
});
btnSubmit.addEventListener("click", function () {
  // Create LiCatElement
  const newCat = document.createElement("li");
  // Create the openButton for the element and the img for it
  const openBu = document.createElement("button");
  const openBuImg = document.createElement("img");
  //  Set ID attribute on element and the button
  var idforCat = createIdLiCat();
  newCat.setAttribute("id", idforCat);
  openBu.setAttribute("id", createIdOpen());
  openBu.setAttribute("type", "button");
  openBuImg.setAttribute("src", "images/open.png");
  openBuImg.setAttribute("alt", "open up");
  // Add text content to element
  /*var newCatName = window.prompt("Name the category for new task:");
  newCat.innerHTML = newCatName;
  */
  //  add element to DOM
  catId.appendChild(newCat);
  newCat.appendChild(openBu);
  openBu.appendChild(openBuImg);
  //add new cat to the categories array
  categories.push({ newCatName, idforCat });
  console.log(categories);
  //counts categories and update the title
  var cntCat = catId.childElementCount;
  document.getElementById("cntCat").innerHTML = cntCat;
  window.location.href = "index.html";
});
//interaction with open button todo
/*document.getElementById("open").addEventListener("click", function () {
  console.log("the open is clicked");
});
*/
