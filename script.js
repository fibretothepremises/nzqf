const qualifications = [
    ["Level", "Certficate", "Diploma", "Degree"],
    [1, "Certificate", "", ""],
    [2, "Certificate", "", ""],
    [3, "Certificate", "", ""],
    [4, "Certificate", "", ""],
    [5, "Certificate", "Diploma", ""],
    [6, "Certficiate", "Diploma", ""],
    [7, "Graduate Certificate", "Diploma/Graduate Diploma", "Bachelor's Degree"],
    [8, "Postgraduate Certificate", "Postgraduate Diploma", "Bachelor Honours Degree"],
    [9, "", "", "Master's Degree"],
    [10, "", "", "Doctoral Degree"],
]

const grid = document.querySelector(".grid");
console.log(grid);

let cells = [];
createGridCells();
function createGridCells() {
    for (i = 0; i < qualifications.length * 4; i++) {
        cells[i] = document.createElement("div");
        grid.appendChild(cells[i]);
    }
    console.log(cells);
}
insertTextContent();
function insertTextContent() {
    let col = 0,
        row = 0;
    for (cell of cells) {
        cell.textContent = qualifications[row][col];
        if (col == 3) {
            col = 0;
            row++;
        } else {
            col++;
        }
    }
}
assignGridHeaderClasses();
function assignGridHeaderClasses() {
    for (i = 0; i < 4; i ++) {
        cells[i].classList.add("grid-header")
    }
}
assignGridCellClasses();
function assignGridCellClasses() {
    for (i = 4; i < cells.length; i++) {
        cells[i].classList.add("grid-cell")
    }
}