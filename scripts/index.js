const homeBtn = document.querySelector(".home");
const authorBtn = document.querySelector(".author");
const githubBtn = document.querySelector(".github");
const linkedinBtn = document.querySelector(".linkedin");
const xBtn = document.querySelector(".x");

homeBtn.addEventListener("click", () => {
    window.location.href = "./index.html";
});
authorBtn.addEventListener("click", () => {
    window.open("https://github.com/fargox-dev", "_blank");
});
githubBtn.addEventListener("click", () => {
    window.open("https://github.com/fargox-dev", "_blank");
});
linkedinBtn.addEventListener("click", () => {
    window.open("http://www.linkedin.com", "_blank");
});
xBtn.addEventListener("click", () => {
    window.open("http://www.x.com", "_blank");
});