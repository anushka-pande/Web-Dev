const record = JSON.parse(localStorage.getItem('record')) || {
  wins: 0,
  losses: 0
};

function playGame(guess) {
  const randomNumber = Math.random();
  const result = randomNumber < 0.5 ? 'heads' : 'tails';

  console.log(guess === result ? 'You win!' : 'You lose!');

  if (guess === result) {
    record.wins++;
  } else {
    record.losses++;
  }
  console.log(record);

  localStorage.setItem('record', JSON.stringify(record));
}

/*function playGame (guess) {
  const randomNumber = Math.random();
  let result;
  
  if(randomNumber < 0.5) {
    result = 'heads';
  } else {
    result = 'tails';
  }
 
  if(guess === result) {
    console.log('You win!');
  } else {
    console.log('You lose!');
  }

}*/