//document.querySelector('.top-box').textContent = dice;
document.querySelector('.dot').style.display = 'none';

document.querySelector('.reset').addEventListener('click', function() {
  const dice = Math.floor(Math.random() * 6) + 1;

  const displayDice = document.querySelector('.dot');
  displayDice.style.display = 'block';
});
