const container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
  let newDiv = document.createElement("div");
  container.append(newDiv);
}

container.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "purple";
});
