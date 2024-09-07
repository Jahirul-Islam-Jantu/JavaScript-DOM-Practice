const onHandler = () => {
  let changeText = document.querySelector("#change");
  changeText.innerText = "On";
  let bulbOn = document.querySelector("#light-img");
  bulbOn.src = "./image/on.webp";
};
const offHandler = () => {
  let changeText = document.querySelector("#change");
  changeText.innerText = "Off";
  let bulbOff = document.querySelector("#light-img");
  bulbOff.src = "./image/off.webp";
};
const toggle = () => {
  let toggleEvent = document.querySelector("#toggle");
  let imgElement = document.querySelector("#light-img");
  let mainbg = document.querySelector(".main");
  if (toggleEvent.innerText === "OFF") {
    toggleEvent.innerText = "ON";
    imgElement.src = "./image/on.webp";
    mainbg.style.background = "#ddd";
  } else {
    toggleEvent.innerText = "OFF";
    imgElement.src = "./image/off.webp";
    mainbg.style.background = "#000";
  }
};
