let game = document.querySelector(".game")
let ripper = document.querySelector(".ripper")
let createGridButton = document.getElementById("createGridButton")

createGridButton.addEventListener("click", () => {
  let numBoxes = parseInt(document.getElementById("numBoxes").value)

  if (!isNaN(numBoxes) && numBoxes > 0) {
    let gridSize = numBoxes
    createDivs(gridSize)
  } else {
    alert("Please enter a valid square root.")
  }
})

let createDivs = (gridSize) => {
  game.innerHTML = ""

  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridDiv = document.createElement(`div`)
    gridDiv.classList.add("gridDiv")

    gridDiv.addEventListener("mouseenter", () => {
      gridDiv.classList.add("hovered")
    })

    game.appendChild(gridDiv)
  }

  game.style.setProperty("--columns", gridSize)
}

let reset = () => {
  game.innerHTML = ""
}

ripper.addEventListener("click", reset)
