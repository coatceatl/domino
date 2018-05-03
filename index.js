const dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('.top-box').textContent = dice;
//const displayDice = document.querySelector('.top-box')

document.querySelector('.reset').addEventListener('click', function() {
  console.log(dice);
});
