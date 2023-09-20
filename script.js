console.log("Welcome to tic tac ")
let music = new Audio("click.mp3")
let over = new Audio("err.mp3")
let winner = new Audio("winn.mp3")
let turn = "X"
let isfinish = false;

const changeTurn = () => {

    return turn === "X" ? "0" : "X"
}
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let checkWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ]
    checkWin.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isfinish = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "12rem";
            winner.play();
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            checkWin();
            if (!isfinish) {
                document.getElementsByClassName("info")[0].innerText = "Turn For  " + turn;
            }
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    winner.pause();
    turn = "X"
    isfinish = false
    document.getElementsByClassName("info")[0].innerText = "Turn For  " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

