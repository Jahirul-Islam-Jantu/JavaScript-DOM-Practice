const clickHandler = () => {
  let fullName = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let color = document.querySelector("#color").value;
  let result = document.querySelector("#inputResult");

  let jsonObj = {
    name: fullName,
    email: email,
    color: color,
  };

  result.innerHTML = JSON.stringify(jsonObj);
};
