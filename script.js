const mainDiv = document.querySelector(`.grid-width`)

for (i = 1; i <= 10; i++) {
  const singleRowContainer = document.createElement(`div`)
  singleRowContainer.classList = `single-row`
  singleRowContainer.id = `Row No. ${i}`
  mainDiv.appendChild(singleRowContainer)
}

for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    const rowDiv = document.createElement(`div`)
    rowDiv.classList = `individual-row-block`
    document.getElementById(`Row No. ${i}`).appendChild(rowDiv)
  }
}
