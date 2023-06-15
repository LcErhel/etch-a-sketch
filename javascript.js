"use strict";

window.onkeydown = function(event) {
    if (event.keyCode === 82) {
        getInput();
    }
}

let currentContainer;
let currentRow;
let currentBox;
console.log(currentContainer);

let boxes = 0;
function getInput() {
    boxes = prompt("How many boxes?", 0);
    resetGame();
    createContainer();
    for (let i = 0; i < boxes; i++) {
        createRow(i);
        for (let j = 0; j < boxes; j++) {
            createBox();
        }
    }
    console.log(currentContainer);
 
    console.log(boxes);
}

const container = document.querySelector(".container");
const row1 = document.querySelector(".row");

/****************************************************/

function createGame(amount) {
    for (let i = 0; i < amount; i++) {
        createRow(i);
    }
}

function createContainer() {
    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    document.body.appendChild(newContainer);
    currentContainer = document.querySelector(".container");
}

function createRow(idNum) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.id = `row${idNum}`;
    currentContainer.appendChild(newRow);
    currentRow = document.querySelector(`#row${idNum}`);
    console.log(currentRow);
}

function createBox() {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    currentRow.appendChild(newBox);
}

function resetGame() {
    document.body.innerHTML = "";
}