// select the root node
const root = document.getRootNode("body");
console.log(root);

// select the last child of the root node
const lastChild = document.lastElementChild("body");
console.log(lastChild);

// select all the children of the body element
const allChild = document.children("body");
console.log(allChild);

// select the next sibling of the h2 node
const nextSib = document.nextSibling("h2");
console.log(nextSib);

// select the parent element of the h1 node
const parentElem = document.parentElement("h1");
console.log(parentElem);
