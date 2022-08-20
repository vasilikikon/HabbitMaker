/*import * as categoriesA from "./app.js";
categoriesA.categories;*/
console.log(categories);
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
