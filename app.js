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
const tasks = [
  {
    taskName: "",
    id: 0,
  },
];

const ListOfTasks = document.getElementById("ListOfTasks");

//gives the date
var today = new Date();
var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
document.getElementById("date").innerHTML = date;

//todo add a loop to redo this when smth changed/added/deleted on page
//counts tasks
var cntTasks = ListOfTasks.childElementCount;
console.log(cntTasks);
document.getElementById("cntAll").innerHTML = cntTasks;

//create a task after pressing the add button
document.getElementById("create").addEventListener("click", function () {
  const input = "HI";
  if (categories.taskName !== input) {
    var el = document.createElement("ul");
    ListCat.appendChild(el);
  }
});

//interaction with open button todo
document.getElementById("open").addEventListener("click", function () {
  console.log("the open is clicked");
});
