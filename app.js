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
const categories = [
  {
    nameCateg: "",
  },
];

const ListCat = document.getElementById("ListOfCategories");

//gives the date
var today = new Date();
var date =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
document.getElementById("date").innerHTML = date;

//counts categories
var olCNTCategories =
  document.getElementById("ListOfCategories").childElementCount;
console.log(olCNTCategories);
document.getElementById("cntAll").innerHTML = olCNTCategories;

//create a untegroup after pressing the create button
document.getElementById("create").addEventListener("click", function () {
  const input = "HI";
  if (categories.nameCateg !== input) {
    var el = document.createElement("ul");
    ListCat.appendChild(el);
  }
});

//interaction with open button todo
document.getElementById("open").addEventListener("click", function () {
  console.log("the open is clicked");
});
