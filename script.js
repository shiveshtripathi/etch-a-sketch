const sketchGrid = document.querySelector('.sketch-grid')

// Function to generate the grid
function generateGrid(gridSize) {
  for (i = 1; i <= gridSize; i++) {
    const row = document.createElement('div')
    row.id = `row no. ${i}`
    row.classList = `row`
    // row.style.display = 'flex'
    sketchGrid.appendChild(row)
    for (j = 1; j <= gridSize; j++) {
      const column = document.createElement('div')
      column.id = `column no. ${j}`
      document.getElementById(`row no. ${i}`).appendChild(column)
      column.classList = 'column'
    }
  }
}

generateGrid(64)
