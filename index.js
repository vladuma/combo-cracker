const message = document.querySelector('.message');
const gameArea = document.querySelector('.game');
const button = document.querySelector('button');
let gamePlay = false;
let score = 0;

button.addEventListener('click', function(){
  if(!gamePlay){
    let diff = +prompt('Set number difficulty (from 1 to 10)');
      if(diff > 10){
        diff = 10;
      } else if (diff <= 0) {
        diff = 1;
      }
    score = 0;
    gamePlay = true;
    gameArea.innerHTML = '';
    combo(diff);
    button.innerText = 'Check combo!';
    message.innerText = 'Guess combo';
  } else
    score++;
    const numbers = document.querySelectorAll('.number');
    let winCounter = 0;

    for (var i = 0; i < numbers.length; i++) {
      let value = +numbers[i].value;
      let correct = +numbers[i].correct;

      message.innerText = 'You took ' + score + ' guesses.';
      if(value === correct){
        numbers[i].style.backgroundColor = 'green';
        winCounter++;
      } else {
        let color = (value < correct) ? 'yellow' : 'red';

        numbers[i].style.backgroundColor = color;
        message.innerText = 'Guess all numbers!';
      }
      if(winCounter == numbers.length){
        gameOver();
      }
    }
  })

function combo(x){
  for (var i = 0; i < x; i++) {
    let el = document.createElement('input');
    el.setAttribute('type', 'number');
    el.min = 0;
    el.max = 9;
    el.size = 1;
    el.style.width = '40px';
    el.classList.add('number');
    el.order = i;

    el.correct = Math.floor(Math.random() * 10);
    el.value = 0;
    gameArea.appendChild(el);
  }
}
 function gameOver(){
   message.innerHTML = 'You WON! It took you <b>' + score + '</b> tries to win.';
   button.innerText = 'Restart game';
   gamePlay = false;
 }
