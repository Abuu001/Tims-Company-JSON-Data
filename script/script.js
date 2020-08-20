// http://www.filltext.com/?rows=1000&pretty=true&firstname={firstName}&lastname={lastName}&username={username}&email={email}&city={city}&company={business}&address={streetAddress}&state={usState}&pwd={password}&phone={phone|format}&id={number|1000}}

const btn = document.getElementById("btn");
const title = document.querySelector("#title");
const container = document.querySelector(".container");
const firstName = document.querySelector(".firstname");
const emails = document.querySelector(".email");
const lastName = document.querySelector(".lastname");
const city = document.querySelector(".city");
const company = document.querySelector(".company");
const address = document.querySelector(".address");
const state = document.querySelector(".state");
const zip = document.querySelector(".zip");
const country = document.querySelector(".country");
const ip = document.querySelector(".ip");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const phone = document.querySelector(".phone");
const active = document.querySelector(".active");
const id = document.querySelector(".id");
const errorMessage = document.querySelector(".error-message");

btn.addEventListener("click", function () {
  const companyData = new XMLHttpRequest();
  companyData.open(
    "GET",
    "http://www.filltext.com/?rows=100&pretty=true&firstname={firstName}&lastname={lastName}&username={username}&email={email}&city={city}&company={business}&address={streetAddress}&state={usState}&pwd={password}&phone={phone|format}&id={number|1000}}",
    true
  );
  companyData.onreadystatechange = function () {
    if (companyData.status == 200) {
      const data = JSON.parse(companyData.responseText);

      data.forEach((element) => {
        id.innerHTML += "<p>" + element.id + "</p>";
        emails.innerHTML += "<p>" + element.email + "</p>";
        firstName.innerHTML += "<p>" + element.firstname + "</p>";
        lastName.innerHTML += "<p>" + element.lastname + "</p>";
        city.innerHTML += "<p>" + element.city + "</p>";
        company.innerHTML += "<p>" + element.company + "</p>";
        address.innerHTML += "<p>" + element.address + "</p>";
        state.innerHTML += "<p>" + element.state + "</p>";
        username.innerHTML += "<p>" + element.username + "</p>";
        password.innerHTML += "<p>" + element.pwd + "</p>";
        phone.innerHTML += "<p>" + element.phone + "</p>";
      });
    } else {
      container.classList.add("container-hide");
      btn.classList.add("btn-hide");
      title.classList.add("title-hide");
      errorMessage.textContent =
        "404 ERROR : Failed to load data .Server took too long  "
    }
  };
   companyData.send();
});
  