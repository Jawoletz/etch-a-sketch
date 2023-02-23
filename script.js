// Get smallest window size
let mouseDown = false;
let gridSize = 16;
let containerSize = Math.min(window.innerHeight, window.innerWidth);
let boxSize = containerSize / gridSize;

function generateGrid(gridSize) {
    // Create container element to hold grid
    container = document.createElement('div'); // Declared without const to make global
    container.className = 'container';
    container.setAttribute('style', `width: ${containerSize}px; height: ${containerSize}px;`)
    document.body.appendChild(container);
    // Generate grid
    for (let i = 0; i < gridSize; i ++) {
        const row = document.createElement('div'); // Create a div element for each row
        row.className = 'row';
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.className = 'div hover';
            div.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px;`)
            div.addEventListener('click', () => {
                div.style.backgroundColor = "black";
            });
            div.addEventListener('mousemove', () => {
                if(mouseDown) {
                    div.style.backgroundColor = "black";
                }
            });
            row.appendChild(div);
        }
    }
}

// Make new grid button
const newGrid = document.getElementById('btn-newGrid');
newGrid.addEventListener('click', () => {
    container.remove();
    gridSize = prompt("Enter new grid size:");
    boxSize = containerSize / gridSize;
    generateGrid(gridSize);
});

// Check if mouse is down
document.body.onmousedown = function(e) {
    mouseDown = true;
}

document.body.onmouseup = function(e) {
    mouseDown = false;
}

generateGrid(gridSize);