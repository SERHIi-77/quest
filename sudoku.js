var randomNumber = Math.floor(Math.random() * 100) + 1; //присвоить число до 100

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');       // хранение ссылок на результаты

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');  //хранят ссылки на форму ввода текста и кнопку отправки 

var guessCount = 1;
var resetButton;  //сохраняют количество догадок 

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'past figures: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameWin();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!Game over!!!';
    setGameLose();
  } else {
    lastResult.textContent = 'Error!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Your number is too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Your number is too big!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);


function setGameWin() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.style.position = 'relative';
  resetButton.className = "guessSubmit";

  resetButton.textContent = 'Continue';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', getKey);
}

function setGameLose(){
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.style.position = 'relative';
   resetButton.className = "guessSubmit";

  resetButton.textContent = 'try again';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', tryAgain);
}

function getKey() {
  sudoku_game.style.display = "none"
  
  casket.style.display = "block"
  sudoku.style.display = "none"
  sudoku_mi.style.display = "block";
  massage.style.display = "block";
  h2.innerText = "The hook and the carbine are in your hands, this is not enough to go down, but you have not solved all the riddles yet. What is the mechanism on the table? it looks like such chests were used by pirates to store keys";
  fadeIn(massage, 300);  
    btnOk.onclick = function () {
        massage.style.display = "none";
        massage.style.opacity = "0";
        qwestfield.style.display = "block";
    };

  document.body.removeChild(resetButton);
}

function tryAgain() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'black';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}



