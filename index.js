
document.querySelector('.reset').addEventListener('click', function() {
  const top = Math.floor(Math.random() * 7);
  const bottom = Math.floor(Math.random() * 7);

  const displayDiceTop = document.querySelector('.top-box');
  const displayDiceBottom = document.querySelector('.bottom-box');
  displayDiceTop.style.display = 'flex';
  displayDiceBottom.style.display = 'flex';
  displayDiceTop.textContent = top;
  displayDiceBottom.textContent = bottom;
  console.log(top);
  console.log(bottom);
});

/*document.querySelector('.rotate-left').addEventListener('click', function() {
  console.log('rotate-left');
});

document.querySelector('.rotate-right').addEventListener('click', function() {
  console.log('rotate-right');
});
*/


