const sketchGrid = document.querySelector('.sketch-grid')

// Function to generate the grid
function generateGrid(gridSize) {
  for (i = 1; i <= gridSize; i++) {
    const row = document.createElement('div')
    row.id = `Row no. ${i}`
    sketchGrid.appendChild(row)
    for (j = 1; j <= gridSize; j++) {
      const column = document.createElement('div')
      column.id = `Column no. ${j}`
      document.getElementById(`Row no. ${i}`).appendChild(column)
    }
  }
}

generateGrid(64)
