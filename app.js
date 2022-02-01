const spaces = [];
const playText = document.getElementById('playText');
const resetButton = document.getElementById('resetButton');
const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT;

let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(event) {
    const id = event.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        event.target.innerText = currentPlayer;
        if (playerHasWon()) {
            playText.innerText = (currentPlayer + ' Has Won!');
            return;
        }
        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
        if (playersHaveDrawn()) {
            playText.innerText = ('Draw!');
            return;
        }
    }
}


const playersHaveDrawn = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === X_TEXT || O_TEXT && spaces[2] === O_TEXT || X_TEXT) {
            console.log("Players Have Drawn");
            return (true);
        }
        if (spaces[3] === X_TEXT || O_TEXT && spaces[6] === O_TEXT || X_TEXT) {
            console.log("Players Have Drawn");
            return (true);
        }
        if (spaces[4] === X_TEXT || O_TEXT && spaces[8] === O_TEXT || X_TEXT) {
            console.log("Players Have Drawn");
            return (true);
        }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === X_TEXT || O_TEXT && spaces[7] === O_TEXT || X_TEXT) {
                console.log("Players Have Drawn");
                return (true);
        }
        if (spaces[3] === X_TEXT || O_TEXT && spaces[5] === O_TEXT || X_TEXT) {
                console.log("Players Have Drawn");
                return (true);
        }
        if (spaces[2] === X_TEXT || O_TEXT && spaces[6] === O_TEXT || X_TEXT) {
                console.log("Players Have Drawn");
                return (true);
        }
    }
    if (spaces[8] === currentPlayer) {
        if (spaces[7] === X_TEXT || O_TEXT && spaces[6] === O_TEXT || X_TEXT) {
                    console.log("Players Have Drawn");
                    return (true);
        }
        if (spaces[5] === X_TEXT || O_TEXT && spaces[2] === O_TEXT || X_TEXT) {
                    console.log("Players Have Drawn");
                    return (true);
        }
        if (spaces[4] === X_TEXT || O_TEXT && spaces[0] === O_TEXT || X_TEXT) {
                    console.log("Players Have Drawn");
                    return (true);
        }
    }
}




        const playerHasWon = () => {
            if (spaces[0] === currentPlayer) {
                if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
                    console.log(currentPlayer + " Wins on the Top");
                    return (true);
                }
                if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
                    console.log(currentPlayer + " Wins on the Left");
                    return (true);
                }
                if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
                    console.log(currentPlayer + " Wins Diagonaly");
                    return (true);
                }
            }
            if (spaces[8] === currentPlayer) {
                if (spaces[5] === currentPlayer && spaces[2] === currentPlayer) {
                    console.log(currentPlayer + " Wins on the Right");
                    return (true);
                }
                if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
                    console.log(currentPlayer + " Wins on the Bottom");
                    return (true);
                }
            }
            if (spaces[4] === currentPlayer) {
                if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
                    console.log(currentPlayer + " Wins Down Middle");
                    return (true);
                }
                if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
                    console.log(currentPlayer + " Wins Across");
                    return (true);
                }
                if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
                    console.log(currentPlayer + " Wins Across");
                    return (true);
                }

            }
        }

        const reset = () => {
            spaces.forEach((space, i) => {
                spaces[i] = null;
            })
            cells.forEach(cell => {
                cell.innerText = '';
            })
            playText.innerText = 'Tic Tac Toe';
            currentPlayer = X_TEXT;
        }

        resetButton.addEventListener('click', reset);
        reset();