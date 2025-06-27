const toggleElement = document.getElementById("menu__toggle");
const navElement = document.querySelector("header nav");

document.addEventListener("change", () => {
  if (toggleElement.checked) {
    navElement.classList.add("open");
  } else {
    navElement.classList.remove("open");
  }
});
