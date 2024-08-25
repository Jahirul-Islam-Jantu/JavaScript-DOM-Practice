const header = document.querySelector("#header");
const paragraph = document.querySelector("#para");

header.style.backgroundColor = "#dddddd";
header.style.color = "#0909";
header.style.textAlign = "center";
header.style.marginTop = "2rem";
header.style.padding = "1rem";
header.style.borderRadius = "12px";

header.textContent = "Hello from JavaScript";

console.log("Hello World");

function showAlert() {
  alert("This is a function call");
}