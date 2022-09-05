///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: javascript.js
// Description: This javascript program will control the dynamic user
//              functions for the etch-a-sketch game. The user will
//              be able to change the color of each square in the 
//              grid by hovering over it.
// Date: August-25-2022
// Notes: You can either use CSS-Grid or Flex-Box for one of these
//       to create your grid. Practice with both to see which one you
//       like the most. 
// -> append() - Puts an element next to another element. 
// -> appendChild() - Puts the element inside another element as a child.
//
// New techniques: 
// ->You will need a nested for loop in order to have the rows and columns equal each other.
// First for loop = rows (left to right)
// Second for loop = columns (top to bottom)
//
// -> There several ways to remove the original nodes
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let defaultGridUnits = 16;

const gridContainer = document.querySelector('.grid-container');

const newGrid = document.querySelector('#new-grid');

// Function will create a grid pattern (rows X cols).
function createGrid(gridUnits)
{
    for (let i = 0; i < gridUnits; i++)
    {
        const rows = document.createElement('div');
        rows.classList.add('grid-rows');
        for (let i = 0; i < gridUnits; i++)
        {
            const cols = document.createElement('div');
            const gridUnitsHeightAndWidth = 960 / gridUnits;
            cols.style.width = `${gridUnitsHeightAndWidth}px`;
            cols.style.height = `${gridUnitsHeightAndWidth}px`;

            // Event will change the color of the squares from hovering mouse.
            cols.addEventListener('mouseover', () => {
                cols.classList.add('change-color');
            });

            rows.appendChild(cols);
        }
        gridContainer.appendChild(rows);
    }
}

// Event will create a new grid pattern.
newGrid.addEventListener('click', () => {
    // Prompt the user to enter a new grid.
    // TODO: This will be changed to a slider instead of allowing the user to enter any number they want.
    nGrid = prompt("Please enter unit size for the new grid");

    // if the grid unit size is greater than 100.
    while (nGrid > 100)
    {
        nGrid = prompt("Grid unit size is larger than 100, please choose a number lower than 100");
    }

    // if no grid unit size is entered.
    if (nGrid === null)
    {
        return;
    }
    else
    {
        // This is the remove section - Remove the old childnodes from the grid-container.
        while(gridContainer.firstChild)
        {
            gridContainer.removeChild(gridContainer.lastChild);
        }
    }
    
    createGrid(nGrid);
});

createGrid(defaultGridUnits);

// Default style attribute for the 'new grid button'
newGrid.setAttribute('style', 
`margin-bottom:20px;
width:120px;
height:60px;
font-size:18px;
border:1px solid #CCFFFF;`);








