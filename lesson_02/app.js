const headingElement = document.createElement("h1");
headingElement.innerText = "Heading";
console.log(headingElement);

const rootEl = document.getElementById("root");

rootEl.appendChild(headingElement);
