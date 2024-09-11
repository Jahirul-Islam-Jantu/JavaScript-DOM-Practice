function increamentHandler() {
  let count = document.querySelector("#count");
  let value = parseInt(count.innerText);
  let newValue = value + 1;
  count.innerText = newValue;
}

function decrementHandler() {
  let count = document.querySelector("#count");
  let value = parseInt(count.innerText);
  let newValue = value - 1;
  count.innerText = newValue;
}
