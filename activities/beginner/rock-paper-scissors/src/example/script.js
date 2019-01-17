// Use this to pick a move at random from the array
function randomMove() {
    return arrOfMoves[Math.floor(Math.random() * arrOfMoves.length)];
}

// Check winning condition
function checkWinningCondition() {
    if (player === 3) {
        announcements.innerHTML = "You Win!";
        player = 0;
        computer = 0;
        playerScore.innerHTML = player;
        computerScore.innerHTML = computer;
    } else if (computer === 3) {
        announcements.innerHTML = "You Lose!";
        player = 0;
        computer = 0;
        playerScore.innerHTML = player;
        computerScore.innerHTML = computer;
    };
};

// Possible moves
var arrOfMoves = [
    'rock',
    'paper',
    'scissors'
];

// Keep track of scores
var player = 0;
var computer = 0;

// Find our elements
var playerScore = document.getElementById('player-score');
var computerScore = document.getElementById('computer-score');
var rockBtn = document.getElementById('rock');
var paperBtn = document.getElementById('paper');
var scissorsBtn = document.getElementById('scissors');
var announcements = document.getElementById('announcements');

// Add event listeners
rockBtn.addEventListener('click', function() {
    var result = randomMove();

    if (result === 'scissors') {
        player++;
        playerScore.innerHTML = player;
        announcements.innerHTML = "Computer chose Scissors. Player Scores!";
    } else if (result === 'paper') {
        computer++;
        computerScore.innerHTML = computer;
        announcements.innerHTML = "Computer chose Paper. Computer Scores!";
    } else {
        announcements.innerHTML = "Tie!";
    }

    checkWinningCondition();
});

paperBtn.addEventListener('click', function() {
    var result = randomMove();

    if (result === 'rock') {
        player++;
        playerScore.innerHTML = player;
        announcements.innerHTML = "Computer chose Rock. Player Scores!";
    } else if (result === 'scissors') {
        computer++;
        computerScore.innerHTML = computer;
        announcements.innerHTML = "Computer chose Scissors. Computer Scores!";
    } else {
        announcements.innerHTML = "Tie!";
    }

    checkWinningCondition();
});

scissorsBtn.addEventListener('click', function() {
    var result = randomMove();

    if (result === 'paper') {
        player++;
        playerScore.innerHTML = player;
        announcements.innerHTML = "Computer chose Paper. Player Scores!";
    } else if (result === 'rock') {
        computer++;
        computerScore.innerHTML = computer;
        announcements.innerHTML = "Computer chose Rock. Computer Scores!";
    } else {
        announcements.innerHTML = "Tie!";
    }

    checkWinningCondition();
});
