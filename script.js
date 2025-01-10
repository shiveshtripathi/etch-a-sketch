const sketchPad = document.querySelector('.sketch-pad')

function generateGrid(gridSize = 64) {
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

generateGrid()
