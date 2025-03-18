"use strict";

function createGrid() {
    let amount = prompt("amount of squares? ", 16);
    let container = document.querySelector(".container");
    // let square = document.createElement("div").classList.add("square");
    // container.appendChild(square);

    outer:
    for(let i = 0; i < amount; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.classList.add(`${i}`);
        container.appendChild(row);

        inner:
        for(let y = 0; y < amount; y++) {
            let square = document.createElement("div")
            square.classList.add("square");
            row.appendChild(square);
        }
    }
    let gridSquares = document.querySelectorAll(".square");
    gridSquares.forEach(gridSquare => gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = "burlywood";
    }));
}