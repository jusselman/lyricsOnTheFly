window.addEventListener('load', init);

// Global //

//  Available levels //
const levels = {
  easy: 10,
  medium: 6,
  difficult: 3
}
let time = 5;
let score = 0;
let isPlaying;

// to change level //
const currentLevel = levels.easy;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  // 'word',
  // 'turd',
  // 'bird'
  'Welcome to the jungle',
  'Don\'t bring me down',
  'IIIIIII\'m hooked on a feeling',
  'Where have all the flowers gone?',
  'If I fell in love with you',
  'Gucci Gang Gucci Gang Gucci Gang',
  'Talkin\' bout me and you',
  'Children behave, that\'s what they say',
  'The kid is not my son',
  'I\'m sorry Miss Jackson ooh',
  'MMM Bop Beep Bu Dop Bop BMM Dop',
  'Wo-o, nada fue un error, nada d\'esto'
];

// initial game //
function init() {
  // show number of seconds in UI //
  seconds.innerHTML = currentLevel;
  // load word from array //
  showWord(words);
  // start matching on word input //
  wordInput.addEventListener('input', startMatch);
  // call countdown every second //
  setInterval(countdown, 1000);
  // check game status //
  setInterval(checkStatus, 50)
}

// Start Match //
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  // if score is -1 display 0 //
  if(score === -1) {
    scoreDisplay.innerHTML = 0;
  }
  scoreDisplay.innerHTML = score;
}

// match currentWord to wordInput //
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
      message.innerHTML = 'Correct!';
      return true;
    } else {
      message.innerHTML = '';
      return false;
    }
  }


// pick and show random word //
function showWord(words) {
  // generate array index //
  const randIndex = Math.floor(Math.random() * words.length);
  // output a random word //
  currentWord.innerHTML = words[randIndex];
}

// countdown timer //
function countdown() {
  // make sure time doesn't run out //
  if(time > 0) {
    //decrement time //
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  // show time in real time //
  timeDisplay.innerHTML = time;
}

// check game status //
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!';
    score = -1;
  }
}
