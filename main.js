const header = document.querySelector("#header");
const paragraph = document.querySelector("#para");
const keyWord = document.querySelector('#key')
const key = document.querySelector('#keyPress')

paragraph.addEventListener("mouseover", e => {
    element = e.target
    element.style.color = '#1d68f8'
    element.style.cursor = 'pointer'
    element.style.backgroundColor = 'rgba(220,220,220,0.38)'
})
paragraph.addEventListener("mouseout", e => {
    element = e.target
    element.style.color = '#8c8b8b'
    element.style.backgroundColor = '#dddddd'
})

window.addEventListener("load", e => {
    console.log('Page loaded')
})





keyWord.addEventListener("keydown", (e) => {
        console.log('key down ', e.key);

})
keyWord.addEventListener("keypress", (e) => {

    key.textContent = e.key

    console.log('key press', e.key);

})
keyWord.addEventListener("keyup", (e) => {

    console.log('key up', e.key);

})

//
// const inputs = document.querySelectorAll("input");


const inputForms = document.querySelector("#form-group");
inputForms.addEventListener("change", (e,value) => {
    values = e.target.value;
    if (values === ''){
        console.log("Values cannot be empty");
    }



})









const submitButton = document.querySelector('#subButton');
submitButton.addEventListener('click', onSubmitHandler)
submitButton.addEventListener('mouseover', ()=>{
    submitButton.classList.add('active');
    submitButton.style.cursor = 'pointer';
    submitButton.classList.remove('active');
} )

function onSubmitHandler(e){
    e.preventDefault()
    console.log("InputForms",inputForms.value)
    console.log("Values",values)
    console.log("submitted", )
    if (values === ""){
        console.log("Values cannot be empty")
    }else {
        const inputValue = values;
        console.log('inputValue :', inputValue)
    }

}


header.style.backgroundColor = "#dddddd";
header.style.color = "#0909";
header.style.textAlign = "center";
header.style.marginTop = "2rem";
header.style.padding = "1rem";
header.style.borderRadius = "12px";

header.textContent = "Hello from JavaScript";


//
// function showAlert() {
//   alert("This is a function call");
// }


