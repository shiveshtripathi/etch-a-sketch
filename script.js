const sketchPad = document.querySelector('.sketch-pad') //To fetch grid container
let initialCounter = 1 //A counter to generate the grid for the first time
const submitButton = document.getElementById('myBtn') //To fetch the button
const displayGridSize = document.querySelector('.display-current-grid-size') //Fetch the div to display Grid Size

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
  if (gridValueByUser > 0 && gridValueByUser <= 100) {
    displaySize(gridValueByUser)
    return gridValueByUser
  } else {
    displaySize(gridValueByUser)
    return 10
  }
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

//To display the grid message
function displaySize(gridSize) {
  if (gridSize > 0 && gridSize <= 100) {
    displayGridSize.textContent = `Current grid size is ${gridSize}x${gridSize}`
    displayGridSize.classList.remove('red-text')
  } else {
    displayGridSize.textContent = `Your input ${gridSize} is not an accepted value. Please enter value between 1 to 100. Current grid size reset to 10x10`
    displayGridSize.classList.add('red-text')
  }
}

function setBg(mouseOverElement) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  mouseOverElement.style.backgroundColor = '#' + randomColor
}

sketchPad.addEventListener('mouseover', (event) => {
  const targetElement = event.target
  setBg(targetElement)
})
