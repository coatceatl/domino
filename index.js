//document.querySelector('.top-box').textContent = dice;
//document.querySelectorAll('.dot').display = 'none';

document.querySelector('.reset').addEventListener('click', function() {
  const top = Math.floor(Math.random() * 7);
  const bottom = Math.floor(Math.random() * 7);

  const displayDiceTop = document.querySelector('.top-box');
  const displayDiceBottom = document.querySelector('.bottom-box');
  displayDiceTop.style.display = 'block';
  displayDiceBottom.style.display = 'block';
  displayDiceTop.textContent = top;
  displayDiceBottom.textContent = bottom;
  console.log(top);
  console.log(bottom);
});
