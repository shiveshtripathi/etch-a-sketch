const sketchPad = document.querySelector('.sketch-pad') //To fetch grid container
let initialCounter = 1 //A counter to generate the grid for the first time
const submitButton = document.getElementById('myBtn') //To fetch the button

// To generate the grid at the start
if (initialCounter === 1) {
  generateGrid()
  initialCounter++
}

//To listen for button click and generate the grid based upon input
submitButton.addEventListener('click', () => {
  generateGrid(valueSubmitBtn())
})

//To return the value of user input and if lower than 0 and exceeds 100  return a default value 10
function valueSubmitBtn() {
  const gridValueByUser = document.getElementById('grid-size').value
  if (gridValueByUser > 0 && gridValueByUser <= 100) return gridValueByUser
  else return 10
}

//To generate the grid by initially deleting the previous one if there is one
function generateGrid(gridSize = 10) {
  if (sketchPad.children.length > 0) sketchPad.textContent = ''
  for (let row = 1; row <= gridSize; row++) {
    const createRow = document.createElement('div')
    createRow.classList.add('row-box')
    createRow.classList.add(`row-no-${row}`)
    sketchPad.appendChild(createRow)
    for (let column = 1; column <= gridSize; column++) {
      const createColumn = document.createElement('div')
      createColumn.classList.add('box')
      createRow.appendChild(createColumn)
    }
  }
}
