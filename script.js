const container = document.querySelector(".container");

function createGrid(size) {
  container.innerHTML = "";
  for (let i = 1; i <= size * size; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("gridDiv");
    newDiv.style.width = `${640 / Math.sqrt(size * size)}px`;
    newDiv.style.height = `${640 / Math.sqrt(size * size)}px`;
    container.append(newDiv);
  }
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

userInputBtn.addEventListener("click", changeGridSize);

function changeGridSize(event) {
  event.preventDefault();
  newSize = prompt("Provide Number of squares per side for the new grid");
  if (newSize > 100) {
    newGridSize = prompt("Sorry, max  size is 100");
  } else if (newSize <= 1) {
    newGridSize = prompt("Sorry, min size is 2");
  }
  return newSize;
}

createGrid(16);
