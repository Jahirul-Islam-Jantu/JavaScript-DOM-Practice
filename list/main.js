function add() {
  const textInp = document.querySelector("#text").value;
  if (textInp) {
    let text = document.querySelector("#text").value;

    let item = document.createElement("li");
    let result = (item.innerHTML = text);

    console.log(result);

    let myList = document.querySelector("#listItem");
    myList.appendChild(item);
  } else {
    alert("text required");
  }
}
