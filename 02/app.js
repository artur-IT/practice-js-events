addEventListener("load", () => {
  document.querySelector("div").addEventListener("mousemove", () => console.log("ruch"));
  document.querySelector("div").addEventListener("mouseout", () => console.log("outside div"));
});
