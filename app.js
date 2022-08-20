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
if (document.getElementById("date")) {
  //gives the date
  function getDate() {
    var today = new Date();
    var date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    document.getElementById("date").textContent = date;
  }
  getDate();
  //counts categories and outputs in the title
  var cntCat = catId.childElementCount;
  document.getElementById("cntCat").innerHTML = cntCat;
  //if you press the ADD button
  btnAdd.addEventListener("click", function () {
    window.location.href = "newCategoryForm.html";
  });
}

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

//export { categories };

//interaction with open button todo
/*document.getElementById("open").addEventListener("click", function () {
  console.log("the open is clicked");
});
*/
