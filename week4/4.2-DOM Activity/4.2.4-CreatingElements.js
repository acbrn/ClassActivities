// create a new unordered list (ul) element
let newList = document.createElement("ul", 2);

// remove the paragraph element in the nav-bar
let navBar = document.getElementById("nav-bar");
let removeParagraph = navBar.querySelector("p");
removeParagraph.remove();

// add your new ul element to the nav-bar
navBar.appendChild(newList);

// create two new list item (li) elements, and add some text to them
let newList2 = document.createElement("li");
let newList3 = document.createElement("li");
newList2.textContent = "I am the best list";
newList3.textContent = "No, I am the best!";

// add the li elements to the ul in the nav-bar
document.newList.appendChild(newList2);
document.newList.appendChild(newList3);
