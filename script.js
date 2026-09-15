const container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("gridDiv");
  container.append(newDiv);
}

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("gridDiv")) {
    event.target.style.backgroundColor = `rgba(${getRandomRGBComponent()}, ${getRandomRGBComponent()}, ${getRandomRGBComponent()}, 0.7)`;
  }
});

function getRandomRGBComponent() {
  return Math.floor(Math.random() * 256);
}

const userInputBtn = document.querySelector(".userInputBtn");
