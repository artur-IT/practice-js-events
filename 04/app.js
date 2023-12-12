const divs = document.querySelectorAll("div");

// add class 'clicked'
divs.forEach((div) => div.addEventListener("click", (e) => e.target.classList.add("clicked")));

// remove class 'clicked' after click to <body>
const myBody = document.querySelector("body");
myBody.addEventListener("click", (e) => {
  const myClick = e.target;
  myClick == myBody ? divs.forEach((div) => div.classList.remove("clicked")) : null;
});
