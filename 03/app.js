document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.textContent = "clicked";
    e.target.disabled = true;
    console.log("clicked");
  });
});
