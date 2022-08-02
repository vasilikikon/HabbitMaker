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

//todo add a loop to redo this when smth changed/added/deleted on page
//counts categories
var cntCat = catId.childElementCount;
console.log(cntCat);
document.getElementById("cntAll").innerHTML = cntCat;

var idCat = 0;
function createId() {
  catId.childNodes.id = idCat;
  idCat++;
}
createId();

console.log();
//save all the categorie in a list
for (let i = 0; i <= cntCat; i++) {
  categories.nameCat[i] = "1";
  //document.getElementById("ListOfCat").firstElementChild;
}
console.log(categories);

//gives the date
var today = new Date();
var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
document.getElementById("date").innerHTML = date;

//create a task after pressing the add button
btnAdd.onclick = () => {
  const input = "HI";
  if (categories.taskName !== input) {
    var el = document.createElement("ul");
    catId.appendChild(el);
  }
};

//interaction with open button todo
document.getElementById("open").addEventListener("click", function () {
  console.log("the open is clicked");
});
