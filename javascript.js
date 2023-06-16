"use strict";

window.onkeydown = function(event) {
    if (event.keyCode === 82) {
        getInput();
    }
}

let currentContainer;
let currentRow;
let currentBox;
let total = 0;

function getElementOnHover() {
    let currentId = "";
    let currentElement;
    document.onmouseover = function(e) {
        currentId = e.target.id;
        currentElement = document.getElementById(currentId);
        console.log(currentElement);
        if (currentElement.classList.contains("box")) {
            currentElement.classList.add("hovered");
        }
        console.log(currentId);
    }
    console.log(currentId);
}

getElementOnHover();

let boxes = 0;
function getInput() {
    boxes = prompt("How many boxes? (max: 128)", 0);
    if (boxes > 128) {
        return
    }
    resetGame();
    createContainer();
    for (let i = 0; i < boxes; i++) {
        createRow(i);
        for (let j = 0; j < boxes; j++) {
            createBox(total);
            total++
        }
    }
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
}

function createBox(idNum) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.id = `box${idNum}`;
    currentRow.appendChild(newBox);
    currentBox = newBox;
}

function resetGame() {
    document.body.innerHTML = "";
}