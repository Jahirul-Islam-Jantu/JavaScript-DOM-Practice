const clickHandler = () => {
  let fullName = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let result = document.querySelector("#inputResult");

  let jsonObj = {
    name: fullName,
    email: email,
  };

  result.innerText = jsonObj;
};
