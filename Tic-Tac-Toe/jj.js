let main = document.getElementById("main");
let button = document.getElementById("button");
let game = document.getElementById("game");
document.querySelector('.p_butt').addEventListener('click', function() {
    button.classList.toggle("active");
    main.classList.toggle("active");
    game.classList.toggle("active");
});


// JavaScript for Tic-Tac-Toe game logic
// JavaScript for Tic-Tac-Toe game logic
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const imgX = 'cross.png';
const imgO = 'o.png';
let cc = 0;
for (let cell of cells) {
    cell.addEventListener('click', function(e) {
        if (e.target.style.backgroundImage === '') {
            if (currentPlayer === 'X') {
                e.target.style.backgroundImage = `url('${imgX}')`;
                e.target.textContent = currentPlayer;
                currentPlayer = 'O';
            } else {
                e.target.style.backgroundImage = `url('${imgO}')`;
                e.target.textContent = currentPlayer;
                currentPlayer = 'X';
            }
            cc++;
        }
        checkForWin(cc);

    });
}


const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let gg = document.getElementById("gg");
let clear = document.getElementById("clear-button");
let res = document.getElementById("res");

function checkForWin(s) {
    console.log(s);
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (
            cells[a].style.backgroundImage === cells[b].style.backgroundImage &&
            cells[b].style.backgroundImage === cells[c].style.backgroundImage &&
            cells[a].style.backgroundImage !== ''
        ) {
            if (cells[a].innerHTML === 'X') {
                cc = 0;
                res.innerHTML = "PLAYER X WINS !";
            } else if (cells[a].innerHTML === 'O') {
                cc = 0;
                res.innerHTML = "PLAYER O WINS !"
            }
            // res.innerHTML = `Player ${cells[a].style.backgroundImage} wins!`;
            perform();

            for (let cell of cells) {
                cell.removeEventListener('click', function(e) {});
            }

        } else {
            if (s == 9) {
                res.innerHTML = "IT'S A DRAW !";
                perform();
            }
        }
    }
}

function perform() {
    res.style.opacity = 1;
    clear.style.width = "200px"
    gg.classList.toggle("active");
    clear.classList.toggle("active");
    clear.innerHTML = "PLAY AGAIN";
    gg.style.opacity = "0";
    clear.addEventListener("click", function() {
        clear.style.width = "130px";
        gg.style.opacity = "1";
        gg.classList.toggle("active");
        clear.classList.toggle("active");
        res.style.opacity = "0";
        clear.innerHTML = "clear";
        cc = 0;
    })
}
// JavaScript for resetting the game state
const clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function() {
    for (let cell of cells) {
        cell.style.backgroundImage = '';
    }
    currentPlayer = 'X';
});