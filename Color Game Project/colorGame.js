const colors = [
  'RGB(255, 0, 0)',
  'RGB(0, 255, 0)',
  'RGB(0, 0, 255)',
  'RGB(255, 255, 0)',
  'RGB(0, 255, 255)',
  'RGB(255, 0, 255)',
];

const squares = document.querySelectorAll('.square');
const pickedColor = colors[2];

const colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;

for (let i=0; i<squares.length; i++) {
  // set background color for each square
  squares[i].style.background = colors[i];

  // set click event listener for each square
  squares[i].addEventListener('click', function() {
    const clickedColor = squares[i].style.background;

    if (clickedColor === pickedColor) {
      alert('Correct.');
    } else {
      alert(wrong);
    }
  });
}
