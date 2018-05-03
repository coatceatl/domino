//document.querySelector('.top-box').textContent = dice;
//document.querySelectorAll('.dot').display = 'none';

document.querySelector('.reset').addEventListener('click', function() {
  const dice = Math.floor(Math.random() * 6) + 1;

  const displayDiceTop = document.querySelector('.top');
  const displayDiceBottom = document.querySelector('.bottom');
  displayDiceTop.style.display = 'block';
  displayDiceBottom.style.display = 'block';
  console.log(dice);
});
