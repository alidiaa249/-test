window.addEventListener("DOMContentLoaded" , () => {
let links = document.querySelectorAll("nav a");
let currentPage = window.location.pathname.split("/").pop();

if (currentPage === "") {
  currentPage = "index.html";
}
links.forEach(link => {
  let linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("nav-active");
  }
});
})