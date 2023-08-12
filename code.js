let game = document.querySelector(".game")
let ripper = document.querySelector(".ripper")

let createDivs = (num) => {
  for (let i = 0; i < num; i++) {
    let gridDiv = document.createElement(`div`)
    gridDiv.classList.add("gridDiv")

    gridDiv.addEventListener("mouseenter", () => {
      gridDiv.classList.add("hovered")
    })

    game.appendChild(gridDiv)
  }
}

createDivs(40)

let reset = () => {
  let gridDiv = document.querySelectorAll(".gridDiv")
  gridDiv.forEach((gridDiv) => {
    gridDiv.classList.remove("hovered")
  })
}

ripper.addEventListener("click", reset)
