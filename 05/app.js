const stats = {
  paragraphs: {
    p1: 0,
  },
  links: {
    "/dolor.html": 0,
  },
};

/* tutaj umieść swój kod */

// zliczanie klika linków !!
const link = document.querySelectorAll(".link");
link.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.pathname == "/dolor.html") stats.links["/dolor.html"]++;
    else null;
  });
});

// zliczanie klika paragrafów !!
const paragraph = document.querySelectorAll("p.text");
paragraph.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.id === "p1") stats.paragraphs.p1++;
    else null;
  });
});

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector(".stats");
const fireCustomEvent = function (element, name) {
  console.log(element, "=>", name);

  const event = new CustomEvent(name, {
    bubbles: true,
  });

  element.dispatchEvent(event);
};

const renderStats = function (data, element) {
  let html = "";
  for (let elementType in data) {
    html += "<ul>";

    for (let key in data[elementType]) {
      html += "<li>";
      html += key + " -> " + data[elementType][key];
      html += "</li>";
    }

    html += "</ul>";
  }

  element.innerHTML = html;
};

document.addEventListener("click", function (e) {
  const tagName = e.target.tagName;
  if (tagName.includes("P") || tagName.includes("A")) {
    fireCustomEvent(statsElement, "render");
  }
});
statsElement.addEventListener("render", renderStats.bind(this, stats, statsElement));
document.addEventListener("DOMContentLoaded", fireCustomEvent.bind(null, statsElement, "render"));
