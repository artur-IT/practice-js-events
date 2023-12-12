const divs = document.querySelectorAll("div");

// add class 'clicked'
addClass = (target) => target.classList.add("clicked");

divs.forEach((div) =>
  div.addEventListener("click", (e) => {
    if (e.target.className == "child") {
      setTimeout(() => addClass(e.target), e.target.dataset.time);
      setTimeout(() => addClass(e.target.parentElement), e.target.parentElement.dataset.time);
      setTimeout(() => addClass(e.target.parentElement.parentElement), e.target.parentElement.parentElement.dataset.time);
    } else setTimeout(() => addClass(e.target), e.target.dataset.time);
  })
);

// remove class 'clicked' after click to <body>
removeClass = (target) => target.classList.remove("clicked");

const myBody = document.querySelector("body");
myBody.addEventListener("click", (e) => (e.target == myBody ? divs.forEach((div) => removeClass(div)) : null));
