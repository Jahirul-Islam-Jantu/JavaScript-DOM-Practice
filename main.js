const header = document.querySelector("#header");
const paragraph = document.querySelector("#para");

//
// const inputs = document.querySelectorAll("input");


const inputForms = document.querySelector("#form-group");
inputForms.addEventListener("change", (e) => {
    values = e.target.value;
    if (values === ''){
        console.log("Values cannot be empty");
    }
    alert(values);
})









const submitButton = document.querySelector('#subButton')
submitButton.addEventListener('click', onSubmitHandler)

function onSubmitHandler(e){
    e.preventDefault()
    values = .value;
    if (values === ""){
        alert("Please enter a info");
        console.log("please enter a valid info");
    }


}


header.style.backgroundColor = "#dddddd";
header.style.color = "#0909";
header.style.textAlign = "center";
header.style.marginTop = "2rem";
header.style.padding = "1rem";
header.style.borderRadius = "12px";

header.textContent = "Hello from JavaScript";

console.log("Hello World");
//
// function showAlert() {
//   alert("This is a function call");
// }


