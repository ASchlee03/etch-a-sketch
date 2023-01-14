// function to create the grid
function createGrid(size) {
    if (size > 30) {
      alert("Error: grid size exceeded the limit of 30x30");
      return;
    }
    // remove existing grid
    const container = document.getElementById("container");
    container.innerHTML = "";
  
    // create new grid
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
      }
    }
  
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    // add event listeners to change color on hover
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
      });
    });
  }
  
  // create initial 16x16 grid
  createGrid(16);
  
  // add event listener to button to prompt for new grid size
  const newGridButton = document.getElementById("new-grid-button");
  newGridButton.addEventListener("click", () => {
    const size = prompt("Enter the number of squares per side for the new sketch (up to 30)");
    createGrid(size);
  });
  